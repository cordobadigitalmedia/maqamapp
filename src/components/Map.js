import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Map({ data }) {
  const center = {
    lat: data.latitude,
    lng: data.longitude,
  };
  const containerStyle = {
    width: "100%",
    height: data.height,
  };
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_Google_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
