import React from 'react'
import Car_card from './Car_card';
const Car_List = (cars,searchTerm) => {
    const filteredcars =cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
      <div className='car-list container'>
        <div className="row">
        {filteredcars.map((car)  => (
          <Car_card key={car.id} car={car} />
        ))}
        </div>
      </div>
  )
}

export default Car_List