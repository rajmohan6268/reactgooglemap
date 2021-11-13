import React, { useRef, useState, useCallback } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

function Map() {
  const [center, setCenter] = useState({ lat: 54.68916, lng: 25.2798 });
  const refMap = useRef(null);

  const handleBoundsChanged = () => {
    const mapCenter = refMap.current.getCenter(); //get map center
    setCenter(mapCenter);
    console.log(mapCenter,'mapCenter')
  };

  return (
    <GoogleMap
      ref={refMap}
      defaultZoom={13}
      defaultCenter={{ lat: 54.68916, lng: 25.2798 }}
      onBoundsChanged={handleBoundsChanged}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));
