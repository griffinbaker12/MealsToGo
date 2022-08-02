import CompactRestaurantInfo from '../../../components/restaurant/compactRestaurantInfo.component';

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap={true} />;
};
export default MapCallout;
