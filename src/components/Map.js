import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
} from "@react-google-maps/api";

function Map({ data }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_Google_API_KEY, // ,
  });
  const center = {
    lat: data.latitude,
    lng: data.longitude,
  };
  const containerStyle = {
    width: "100%",
    height: data.height,
  };
  const options = { closeBoxURL: "", enableEventPropagation: true };
  const renderMap = () => {
    return (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={data.zoom}>
        <Marker position={center} />
        <InfoBox position={center}>
          <div style={{ backgroundColor: "yellow", opacity: 0.75, padding: 4 }}>
            <div
              style={{
                fontSize: 14,
                fontColor: `#08233B`,
                textDecoration: `underline`,
              }}
            >
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${data.latitude},${data.longitude}&travelmode=driving`}
                target="_blank"
              >
                Directions in Google Maps
              </a>
            </div>
          </div>
        </InfoBox>
      </GoogleMap>
    );
  };
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Loading...</div>;
}

export default React.memo(Map);
