import WebView from 'react-native-webview';
import styled from 'styled-components';
import { Text } from '../typography/typography.component';
import { Platform } from 'react-native-web';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.os === 'android';

const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant='caption' numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
export default CompactRestaurantInfo;
