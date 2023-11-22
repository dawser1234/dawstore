import React , { useEffect }  from 'react';
import './UserList.css'; // Import your CSS file
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { getusers } from '../../Redux/Actions/actionUser'

const UserList = () => {
  // Assuming you have an array of user data
  const users=useSelector(state=>state.userReducer.users)
  const dispatch=useDispatch()
  useEffect(() => {
   dispatch( getusers())



  }, [])
  console.log(users);
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
        <tr key={user.id}>s
            <td>
              <img src={user.imageUrl} alt={user.name} className="user-image" />
            </td>
            <td className="user-details">
              <h6>{user.name}</h6>
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
