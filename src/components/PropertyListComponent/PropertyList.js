import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../SearchBarComponent/SearchBar';
import PaginateProperties from '../PaginatePropertiesComponent/PaginateProperties';
import './propertyList.scss';
import { UserContext } from './UserContext';

export default function PropertyList() {
  const { users } = useContext(UserContext);

  const [filteredUser, setFilteredUser] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [usersPerPage, setUsersPerPage] = useState(10);
  const pagesVisited = pageNumber * usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleUsersPerPage = (event) => {
    const users = parseInt(event.target.value);
    console.log('numbers of user are ', users);
    setPageNumber(0);
    setUsersPerPage(users);
  };

  useEffect(() => {
    setFilteredUser(users);
  }, [users]);

  // useEffect hook to update
  useEffect(() => {
    const pagesCount = Math.ceil(filteredUser.length / usersPerPage);
    setPageCount(pagesCount);
  }, [filteredUser, usersPerPage]);

  //handleChange function that filters what is typed in the searchbar
  const handleChange = (event) => {
    //Sets the page count back to zero
    setPageNumber(0);
    const searchWord = event.target.value;
    const newFilter = users.filter((value) => {
      return (
        value.name
          .toLowerCase()
          .trim()
          .indexOf(searchWord.toLowerCase().trim()) > -1
      );
    });

    if (searchWord === ' ') {
      setFilteredUser(users);
    } else {
      setFilteredUser(newFilter);
    }
  };
  console.log("This is the number of pages", usersPerPage);
  console.log(typeof usersPerPage);
  return (
    //SearchBar component
    <div>
      <SearchBar
        handleChange={(event) => handleChange(event)}
        placeholderProp={'Search...'}
      />

      <div>
        <form>
          <label>
            Select the number of properies per page
            <select
              className="userSelect"
              value={usersPerPage}
              onChange={handleUsersPerPage}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </label>
        </form>
      </div>

      {/* Displays user CSS cards */}
      <h1>Property Details</h1>
      <div className="userWrapper">
        {/* Displays a list of filtered users based on what is typed in the search bar */}
        {filteredUser
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .map((user, index) => {
            return (
              <div className="userItem" key={index}>
                <p className="userTitle">
                  Address: {user.display_address} Price: {user.price}
                  Bedrooms: {user.bedrooms}
                </p>
                <div className="userInfo">
                  <span className="userInfo"></span>
                </div>
                {/* <Link to={`/user/${user.branch_id}`}>More Info</Link> */}
                <a href={`/user/${user.property_id}`}>More Info</a>
              </div>
            );
          })}
      </div>

      {/* PaginateUsers component */}
      <PaginateProperties
        users={filteredUser}
        pageCount={pageCount}
        changePage={changePage}
        pageNumber={pageNumber}
      />
    </div>
  );
}
