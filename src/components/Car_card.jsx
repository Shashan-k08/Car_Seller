import React from 'react'

const Car_card = ({car}) => {
  return (
    <div className='row'>
      <div className="col-sm">
        <div class="card" style={{ width: "15rem" ,marginLeft:"70px" ,borderRadius:"30px",border:"none" }}>
          <img class="card-img-top" src={car.image} alt="Card image cap" />
          <div class="card-body">
            <h2>{car.name}</h2>
            <h6>{car.bakery}</h6>
            <p> ${car.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Car_card