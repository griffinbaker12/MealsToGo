import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import Spacer from '../spacer/spacer.component';
import CompactRestaurantInfo from '../restaurant/compactRestaurantInfo.component';
import { TouchableOpacity } from 'react-native';

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

const FavoritesBar = ({ favorites, navigation }) => {
  return favorites.length ? (
    <FavoritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map(fav => (
          <Spacer key={fav.placeId} position='left' size='medium'>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetailScreen', {
                  restaurant: fav,
                })
              }
            >
              <CompactRestaurantInfo restaurant={fav} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavoritesWrapper>
  ) : null;
};
export default FavoritesBar;
