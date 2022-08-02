import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { FavoritesContext } from '../../services/favorites/favorites.context';

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favorite = ({ restaurant }) => {
  const { favorites, addFavRestaurant, removeFavRestaurant } =
    useContext(FavoritesContext);

  const isFavorite = favorites.find(fav => fav.placeId === restaurant.placeId);

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      addFavRestaurant(restaurant);
    } else {
      removeFavRestaurant(restaurant);
    }
  };

  return (
    <FavoriteButton onPress={handleAddToFavorites}>
      <AntDesign
        name={isFavorite ? 'heart' : 'hearto'}
        size={24}
        color={isFavorite ? 'red' : 'white'}
      />
    </FavoriteButton>
  );
  return null;
};
export default Favorite;
