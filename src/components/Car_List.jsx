import React, { useState, useEffect } from 'react';
import Car_card from './Car_card';
import JsonData from './car_data.json';
import ReactPaginate from "react-paginate";

const Car_List = ({ searchTerm }) => {
  const [users, setUsers] = useState(JsonData.slice(0, 60));
  const [pageNumber, setPageNumber] = useState(0);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    // Filter the users based on the searchTerm
    const filteredData = JsonData.filter((user) =>
      user.carName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredData);
  }, [searchTerm]);

  const displayUsers = filteredUsers
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <Car_card key={user.id} car={user} />
      );
    });

  const pageCount = Math.ceil(filteredUsers.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='car-list container'>
      <div className="row">
        {displayUsers}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Car_List;
