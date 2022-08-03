import { useContext } from 'react';
import { AuthContext } from '../../services/auth/auth.context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app.navigator';
import AccountNavigator from './account.navigator';

export default Navigation = ({ isAuthenticated }) => {
  console.log(isAuthenticated, 'is auth');
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
