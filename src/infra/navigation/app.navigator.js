import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SafeArea from '../../components/safe-area/safe-area.component';
import RestaurantsNavigator from './restaurants.navigator';
import MapScreen from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

function tabBarIcon(iconName) {
  return function ({ size, color }) {
    return <Ionicons name={iconName} size={size} color={color} />;
  };
}

function screenOptions({ route }) {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),
  };
}

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
}

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        tabStyle: { paddingTop: 5 },
        labelStyle: { marginTop: 2 },
      }}
    >
      <Tab.Screen name='Settings' component={SettingsScreen} />
      <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
      <Tab.Screen name='Map' component={MapScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
