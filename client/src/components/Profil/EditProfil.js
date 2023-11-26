import React, { useState, useEffect } from 'react';
 // Adjust the CSS file path accordingly
import Button from 'react-bootstrap/Button';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrent, editUser } from '../../Redux/Actions/actionUser';

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState()
  const [img, setimg] = useState()

  
  
    


  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  const User = useSelector((state) => state.userReducer.currentUser);
  useEffect(() => {

    setUserData(User)
    
    
    
    }, [])
console.log(userData)
  const handleInputChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };
  const handleemailChange = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const handleSaveProfile = () => {
    

    // Ensure userData is defined before proceeding
    
      const data = new FormData();
      data.append('name', userData.name);
      data.append('email', userData.email);
      data.append('file', img);

      // Dispatch the editUser action with the current user's ID
      dispatch(editUser(userData._id, data,navigate));
        // Redirect or perform any other actions after a successful update
     
  };
  return (
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        {/* ... (Your existing HTML structure) ... */}
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder={userData&&userData.name}
             
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label className="labels">email</label>
            <input
              type="text"
              className="form-control"
              placeholder={userData&&userData.email}
              
              onChange={handleemailChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          
        <div className="row mt-3">
        <div className="col-md-12">
          <label className="labels">Profile Picture</label>
          <input
            type="file"
            className="form-control"
            name="file"
            onChange={(e) => setimg(e.target.files[0])}
          />
        </div>
      </div>
        </div>
        <div className="row mt-3">
          
          
        </div>
        <div className="mt-5 text-center">
          <button
            className="btn btn-primary profile-button btn5"
            type="button"
            onClick={handleSaveProfile}
          >
            Save Profile
          </button>
        </div>
        {/* ... (Your existing HTML structure) ... */}
      </div>
      <Link to={'/'}>
        <Button className='btdaw' variant="outline-secondary">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default EditProfile;
