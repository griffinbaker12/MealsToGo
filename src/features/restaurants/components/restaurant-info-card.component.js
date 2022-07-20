import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import Svg, { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  padding-bottom: ${props => props.theme.space[0]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const StarContainer = styled.View`
  flex-direction: row;
  padding: ${props => props.theme.space[2]} 0;
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: ${props => props.theme.space[2]} 0; */
`;

const SectionEnd = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  gap: 12px;
  /* padding: ${props => props.theme.space[2]} 0; */
`;

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
  // console.log(ratingArray);
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <StarContainer>
            {ratingArray.map(() => (
              <SvgXml height={20} width={20} xml={star} />
            ))}
          </StarContainer>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant='label' style={{ color: 'red' }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            {isOpenNow && <SvgXml height={20} width={20} xml={open} />}
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
export default RestaurantInfo;
