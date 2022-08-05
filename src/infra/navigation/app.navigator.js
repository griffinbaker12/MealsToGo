import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import RestaurantsNavigator from './restaurants.navigator';
import MapScreen from '../../features/map/screens/map.screen';
import SettingsNavigator from './settings.navigator';
import { RestaurantsContextProvider } from '../../services/restaurant/restaurants.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavoritesContextProvider } from '../../services/favorites/favorites.context';

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

const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              tabStyle: { paddingTop: 5 },
              labelStyle: { marginTop: 2 },
            }}
            initialRouteName='Restaurants'
          >
            <Tab.Screen name='Map' component={MapScreen} />
            <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
            <Tab.Screen name='Settings' component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};

export default AppNavigator;
