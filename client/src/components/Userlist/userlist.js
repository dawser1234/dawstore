import React from 'react';
import './UserList.css'; // Import your CSS file
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const UserList = () => {
  // Assuming you have an array of user data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', imageUrl: 'https://example.com/user1.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', imageUrl: 'https://example.com/user2.jpg' },
    // Add more user data as needed
  ];

  return (
    <div>
    <table className="user-table">
      <thead>
        <tr>
          <th>User Image</th>
          <th>User Details</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <img src={user.imageUrl} alt={user.name} className="user-image" />
            </td>
            <td className="user-details">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <br></br>
      <Link to={'/'} ><Button className='btdaw' variant="outline-secondary">Home</Button>{' '}</Link>
    </div>
  );
};

export default UserList;
