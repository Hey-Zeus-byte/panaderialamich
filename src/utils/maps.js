const location = {
  address: "3801 Yosemite Boulevard, Modesto, California.",
  lat: 37.63957,
  lng: -120.92603,
};

export const openGoogleMaps = () => {
  window.open("https://maps.google.com?q=" + location.lat + "," + location.lng);
};
