import { useContext } from 'react';
import styled from 'styled-components/native';
import { List, Avatar } from 'react-native-paper';
import { AuthContext } from '../../../services/auth/auth.context';
import { Text } from '../../../components/typography/typography.component';
import Spacer from '../../../components/spacer/spacer.component';
import SafeArea from '../../../components/safe-area/safe-area.component';

const SettingsItem = styled(List.Item)`
  padding: ${props => props.theme.space[3]};
`;

const AvatarWrapper = styled(Avatar.Icon)`
  margin-bottom: ${props => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[2]};
`;

function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <AvatarWrapper size={150} icon='human' backgroundColor='#2182BD' />
        <Spacer>
          <Text variant='label'>{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title='Favorites'
          description='View your favorites'
          left={props => <List.Icon {...props} color='black' icon='heart' />}
          onPress={() => navigation.navigate('Favorites')}
        />
        <SettingsItem
          title='Logout'
          onPress={onLogout}
          left={props => <List.Icon {...props} color='black' icon='door' />}
        />
      </List.Section>
    </SafeArea>
  );
}

export default SettingsScreen;
