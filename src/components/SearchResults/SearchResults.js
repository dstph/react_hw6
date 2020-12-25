import React, {useState, useEffect} from 'react';
import OptionsWrapper from '../OptionsWrapper/OptionsWrapper';
import MyMapComponent from '../MyMapComponent/MyMapComponent';
import './searchresults.css';
import {MainContext} from '../UseContext/UseContext';


const SearchResults = () => {
  const optionDefault = {data:{}};
  const [options, setOptions] = useState(optionDefault);
  useEffect( () => {
    fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
      "destinationId": "1506246",
      "pageNumber": "1",
      "checkIn": "2020-12-27",
      "checkOut": "2020-12-29",
      "pageSize": "25",
      "adults1": "1",
      "currency": "USD",
      "locale": "en_US",
      "sortOrder": "PRICE"
      })}`, {
        method: 'GET',
        headers: {
          "x-rapidapi-key": "e709158813msh46d143c0087c2f3p1a099djsna278ff1e6dd8",
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "useQueryString": true
        }
      })
      .then(data => data.json())
      .then(json => setOptions(json))
      .catch((error) => console.log(error))
  }, [])
  return(
    <MainContext.Provider value={options.data.body}>
      <div className='container_search_results'>
        <div className="column">
        {
          options.result === 'OK' &&
          <OptionsWrapper options={options.data.body} />
        }
        </div>
        <div className="column_map">
        <MyMapComponent
          isMarkerShown={true}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100vh` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100vh` }} />}
        />
        </div>
      </div>
    </MainContext.Provider>  
  )
}

export default SearchResults;