import React ,{useState}from 'react';
import searchIcon from '../img/Vector-removebg-preview.png';
const Search_bar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
      onSearch(e.target.value);
    };
   
    return (
        <div className='search_container'>
            <div className="search-bar">
                <input class="search" type="search" placeholder="Search"  value={searchTerm}  onChange={handleSearch} />
                <img src={searchIcon} alt='' />
            </div>
            <div className="select-container">

                <select >
                    <option value="name">Relevence</option>
                    <option value="price">Price</option>
                </select>
                <select >
                    <option value="name">All Brands</option>
                    <option value="price">Price</option>
                </select>
            </div>
        </div>
    )
}

export default Search_bar