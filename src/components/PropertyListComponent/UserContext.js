
import React from 'react'
import { createContext, useState, useEffect } from 'react';
import getApiData from './getApiData';

export const UserContext = createContext();

export default function UserProvider(props) {
  const [properties, setUsers] = useState([]);
  const myContextValue = { users: properties };

  useEffect(() => {
    getApiData().then((response) => {
      // const newUsers = response.data;
      // setUsers(newUsers);
      console.log('my response is:')
      console.log(response)

      setUsers(response)
    });
  }, []);

  console.log("The properties are:")
  console.log(properties)

  return (
    <UserContext.Provider value={myContextValue}>
      {props.children}
    </UserContext.Provider>
  );
}