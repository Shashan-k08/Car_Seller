import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Data from './components/car_data.json';
import Search_bar from './components/Search_bar';
import Car_List from './components/Car_List';


function App() {
  const [cars, setcars] = useState(Data);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');


 
  return (
    <div  className='main-box'>
      <Header />
      <Search_bar onSearch={(term) => setSearchTerm(term)}/>
      <Car_List  searchTerm={searchTerm}/>
    
    </div>
  );
}

export default App;
