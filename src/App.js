import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Data from './car_data';
import Search_bar from './components/Search_bar';
import Car_List from './components/Car_List';
import Pagination from './components/Pagination';

function App() {
  const [cars, setcars] = useState(Data);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = cars.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    }
    return 0;
  });
  return (
    <div  className='main-box'>
      <Header />
      <Search_bar onSearch={(term) => setSearchTerm(term)}/>
      <Car_List cars={sortedProducts} searchTerm={searchTerm}/>
      <Pagination/>
    </div>
  );
}

export default App;
