import { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../../services/auth/auth.context';
import { Text } from '../../../components/typography/typography.component';
import Spacer from '../../../components/spacer/spacer.component';
import SafeArea from '../../../components/safe-area/safe-area.component';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import RestaurantInfo from '../../restaurants/components/restaurant-info-card.component';
import { Button, Colors } from 'react-native-paper';

const FavoritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoFavoritesWrapper = styled.View`
  margin: 0 auto;
  font-size: 24px;
  margin-top: 64px;
  align-items: center;
  border: lightblue;
  padding: 24px 32px;
  border-radius: 8px;
`;

function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      {favorites.length ? (
        <FavoritesList
          data={favorites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetailScreen', {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <NoFavoritesWrapper>
          <Text>No favorites yet!</Text>
          <Spacer size='large' />
          <Button
            color={Colors.blue300}
            icon='silverware-fork'
            mode='contained'
            onPress={() => navigation.navigate('Restaurants')}
          >
            Find Restaurants
          </Button>
        </NoFavoritesWrapper>
      )}
    </SafeArea>
  );
}

export default FavoritesScreen;
