import { useState, useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  const onSearchChange = query => setSearchQuery(query);

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search'
        onChangeText={onSearchChange}
        onSubmitEditing={() => search(searchQuery)}
        value={searchQuery}
      />
    </SearchContainer>
  );
};
export default Search;
