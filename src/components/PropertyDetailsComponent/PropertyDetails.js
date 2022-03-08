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
          {/* Name: {user.name} Email: {user.email} */}
          Address: {user.display_address} Price: {user.price}

        </p>
        {/* <p className="addressInfo">Address: {user.address.street}</p> */}
        <p className="addressInfo">City: {user.town}</p>
        <p className="addressInfo">Post Code: {user.postcode}</p>
        <p className="addressInfo">Status: {user.short_description}</p>
        <p className="addressInfo">Bathrooms: {user.bathrooms}</p>
        {/* <p className="addressInfo">Website: {user.website}</p> */}
        <div>
          <Link to={`/`}>Home</Link>
        </div>
      </div>
    );
  });
  return <div>{userInfo}</div>;
}
