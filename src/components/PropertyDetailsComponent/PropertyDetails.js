import React from 'react';

export default function PropertyDetails() {
  const { users } = useContext(UserContext);
  const { userId } = useParams();
  console.log(users);
  const filteredUsers = users.filter((user) => {
    console.log(user);
    return user.id === parseInt(userId);
  });
  //filteredUsers e.g = [{name: john  email:email@john}]
  const userInfo = filteredUsers.map((user, index) => {
    return (
      <div className="userItem" key={index}>
        <p className="userTitle">
          Name: {user.name} Email: {user.email}
        </p>
        <p className="addressInfo">Address: {user.address.street}</p>
        <p className="addressInfo">City: {user.address.city}</p>
        <p className="addressInfo">Zip Code: {user.address.zipcode}</p>
        <p className="addressInfo">Phone: {user.phone}</p>
        <p className="addressInfo">User Name: {user.username}</p>
        <p className="addressInfo">Website: {user.website}</p>
        <div>
          <Link to={`/`}>Home</Link>
        </div>
      </div>
    );
  });
  return <div>{userInfo}</div>;
}
