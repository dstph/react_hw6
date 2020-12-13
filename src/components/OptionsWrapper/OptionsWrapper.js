import React from 'react';
import Option from '../Option/Option';
import './optionwrapper.css'

const OptionsWrapper = ({options, options:{header, searchResults, searchResults:{results}}}) => {

  
  return(
    <>
      <h1>{header}</h1>
      {results &&
      results.map((props, index) => (
        <Option {...props} key={props.id} />
      ))}
    </>
  )
}

export default OptionsWrapper;