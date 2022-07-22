import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
  margin-bottom: ${props => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  padding-bottom: ${props => props.theme.space[0]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.ui.primary};
`;

export const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const StarContainer = styled.View`
  flex-direction: row;
  padding: ${props => props.theme.space[2]} 0;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: ${props => props.theme.space[2]} 0; */
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  gap: 12px;
  /* padding: ${props => props.theme.space[2]} 0; */
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
