import React from 'react'

const Car_card = ({car}) => {
  return (
    <div className='row'>
      <div className="col-sm">
        <div class="card" style={{ width: "15rem" ,marginLeft:"70px" ,borderRadius:"30px",border:"none" }}>
          <img class="card-img-top"  style={{height:"140px"}} src={car.image} alt="Card image cap" />
          <div class="card-body">
            <h2>{car.carName}</h2>
            <h6>{car.type}</h6>
            <p> ${car.rentPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Car_card