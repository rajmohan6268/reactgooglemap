import React, { Component } from 'react';
import { render } from 'react-dom';
import WrappedMap from './Map';
import './style.css';

function App() {
  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `220px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

render(<App />, document.getElementById('root'));
