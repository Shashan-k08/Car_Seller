import React from 'react'
import storeIcon from "../img/car-store.jpg"
const Header = () => {
  return (
    <div>
         
      <div className='header-icon'>
        <img className="icon-img" src={storeIcon} alt='' />
        <div className="icon-text">
          <h4>Car Seller  </h4>
          <p> Ghaziabad , India</p>
        </div>

      </div>
     
      <hr/>
    </div>
  )
}

export default Header