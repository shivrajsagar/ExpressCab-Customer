export const SaveDetails = ({ item }) => ({
  type: "SAVE_DETAIL",
  placeDetails: {
    pickaddress: item.city_name,
    dropaddress: item.city_name,
    price: item.state_name,
  },
});
