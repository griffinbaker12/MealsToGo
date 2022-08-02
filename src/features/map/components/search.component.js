import { useState, useContext, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 35px;
  width: 100%;
`;

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon='map'
        placeholder='Search'
        onChangeText={text => setSearchKeyword(text)}
        onSubmitEditing={() => search(searchKeyword)}
        value={searchKeyword}
      />
    </SearchContainer>
  );
};
export default Search;
