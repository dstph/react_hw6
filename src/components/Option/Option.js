import React from 'react';
import './option.css'

const Option =  ({address, deals, guestReviews, name, thumbnailUrl,
   ratePlan, ratePlan:{ features, features:{freeCancellation, noCCRequired, paymentPreference} }}) => {
  return(
    <div className="option_card">
      <div className='img_center'><img src={thumbnailUrl} alt="preview"/></div>
      <div className="flex_grow"> 
        <p>{address.countryName} {address.locality} {address.region} {address.streetAddress}</p>
        <h3>{name}</h3>
        <p>Options:</p>
      
        <p><b>free cancellation:</b> {freeCancellation ? '-' : '+'} <b>no cc required:</b> {noCCRequired ? '-' : '+'} <b>payment preference:</b> {paymentPreference ? '-' : '+'} </p>
        <div className="rating_price"><p>Rating: {guestReviews.rating}</p> <p>Price: {ratePlan.price.current}</p></div>
      </div>
    </div>
  )
}

export default Option;
