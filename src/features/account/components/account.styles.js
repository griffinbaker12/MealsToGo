import styled from 'styled-components/native';

// Also, if you think about it here source is an attribute that would exist
// on this components so that is why we are using this attrs method; we are
// setting props, hard-coded
export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;
