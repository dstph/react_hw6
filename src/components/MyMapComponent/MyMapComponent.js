import React, {useContext} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {MainContext} from '../UseContext/UseContext';

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
  const value = useContext(MainContext);

  return(
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{lat: 40.704175, lng: -73.937509}}
    >
      {props.isMarkerShown && value &&
        value.searchResults.results.map((val, index)=>(
          <Marker position={{ lat: val.coordinate.lat, lng: val.coordinate.lon }} key={val.thumbnailUrl} />
        ))
      }
    </GoogleMap>
  ) }
))

export default MyMapComponent;