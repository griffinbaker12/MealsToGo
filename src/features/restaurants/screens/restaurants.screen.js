import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

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
      <RestaurantContainer>
        <RestaurantInfo />
      </RestaurantContainer>
    </SafeArea>
  );
}

export default RestaurantsScreen;
