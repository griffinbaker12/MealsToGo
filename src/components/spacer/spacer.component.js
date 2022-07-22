import { View, Text } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'margin-top',
  left: 'margin-left',
  bottom: 'margin-bottom',
  right: 'margin-right',
};

const getVariant = (position, size, theme) =>
  `${positionVariant[position]}: ${theme.space[sizeVariant[size]]}`;

// export const Spacer = styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = { position: 'top', size: 'small' };

export default Spacer;
