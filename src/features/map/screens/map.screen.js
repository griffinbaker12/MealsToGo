import { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';
import MapCallout from '../components/map-callout.component';
import Search from '../components/search.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    if (viewport) {
      const neLat = viewport.northeast.lat;
      const swLat = viewport.southwest.lat;
      setLatDelta(neLat - swLat);
    }
  }, [viewport]);

  return (
    <>
      <Search />
      {viewport ? (
        <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {restaurants.map(restaurant => {
            return (
              <MapView.Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              >
                <MapView.Callout
                  onPress={() =>
                    navigation.navigate('RestaurantDetailScreen', {
                      restaurant,
                    })
                  }
                >
                  <MapCallout restaurant={restaurant} />
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        </Map>
      ) : (
        <Map />
      )}
    </>
  );
};
export default MapScreen;
