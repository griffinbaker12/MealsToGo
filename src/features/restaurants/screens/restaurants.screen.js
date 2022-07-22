import { useState } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/restaurant-info-card.component';
import SafeArea from '../../../components/safe-area/safe-area.component';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

// Because the content container style applies to the whole list and NOT each individual item, this will work great!
const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState();

  const onSearchChange = query => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder='Search'
          onChangeText={onSearchChange}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantsList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
}

export default RestaurantsScreen;
