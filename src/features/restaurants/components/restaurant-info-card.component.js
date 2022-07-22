import { View, Image } from 'react-native';
import Svg, { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import Spacer from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/typography.component';
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  StarContainer,
  Section,
  SectionEnd,
  Icon,
} from './restaurant-info-card.styles';

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4.2,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant='label'>{name}</Text>
        <Section>
          <StarContainer>
            {ratingArray.map(() => (
              <SvgXml height={20} width={20} xml={star} />
            ))}
          </StarContainer>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant='error'>CLOSED TEMPORARILY</Text>
            )}
            <Spacer position='left' size='large'>
              {isOpenNow && <SvgXml height={20} width={20} xml={open} />}
            </Spacer>
            <Spacer position='left' size='large'>
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
export default RestaurantInfo;
