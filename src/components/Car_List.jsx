import React ,{useState} from 'react'
import Car_card from './Car_card';
import Data from '../car_data';
import ReactPaginate from "react-paginate";
const Car_List = ({cars,searchTerm}) => {
  const [users, setUsers] = useState(Data);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <Car_card key={user.id} car={user} />
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

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
  )
}

export default Car_List