import { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import RestaurantInfo from '../components/restaurant-info-card.component';
import SafeArea from '../../../components/safe-area/safe-area.component';
import styled from 'styled-components/native';
import Search from '../components/search.component';
import FavoritesBar from '../../../components/favorites/favorites-bar.component';
import FadeInView from '../../../components/animations/fade.animation';
import { LocationContext } from '../../../services/location/location.context';
import { Text } from '../../../components/typography/typography.component';

// Because the content container style applies to the whole list and NOT each individual item, this will work great!
const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const ErrorContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 20%;
`;

function RestaurantsScreen({ navigation }) {
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isToggled={isToggled}
        onToggle={() => setIsToggled(prevState => !prevState)}
      />
      {isToggled && (
        <FavoritesBar navigation={navigation} favorites={favorites} />
      )}
      {isLoading ? (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.black} />
        </LoadingContainer>
      ) : error || locationError ? (
        <ErrorContainer>
          <Text variant='error'>Error retrieving the data</Text>
        </ErrorContainer>
      ) : (
        <RestaurantsList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetailScreen', {
                    restaurant: item,
                  })
                }
              >
                <FadeInView duration='1000'>
                  <RestaurantInfo restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.name}
        />
      )}
    </SafeArea>
  );
}

export default RestaurantsScreen;
