import { useContext } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';
import RestaurantInfo from '../components/restaurant-info-card.component';
import SafeArea from '../../../components/safe-area/safe-area.component';
import styled from 'styled-components/native';
import Search from '../components/search.component';

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

function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.black} />
        </LoadingContainer>
      ) : (
        <RestaurantsList
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfo restaurant={item} />;
          }}
          keyExtractor={item => item.name}
        />
      )}
    </SafeArea>
  );
}

export default RestaurantsScreen;
