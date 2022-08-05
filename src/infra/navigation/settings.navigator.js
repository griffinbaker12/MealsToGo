import { useEffect } from 'react';
import SettingsScreen from '../../features/settings/screens/settings.screen';
import FavoritesScreen from '../../features/favorites/screens/favorites.screen';
import CameraScreen from '../../features/settings/screens/camera.screen';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode='screen'
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name='Settings'
        component={SettingsScreen}
      />
      <SettingsStack.Screen name='Favorites' component={FavoritesScreen} />
      <SettingsStack.Screen name='Camera' component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
