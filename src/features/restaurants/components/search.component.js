import { useState, useContext, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Search = ({ isToggled, onToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => setSearchQuery(keyword), [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isToggled ? 'heart' : 'heart-outline'}
        onIconPress={onToggle}
        placeholder='Search'
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={() => search(searchQuery)}
        value={searchQuery}
      />
    </SearchContainer>
  );
};
export default Search;
