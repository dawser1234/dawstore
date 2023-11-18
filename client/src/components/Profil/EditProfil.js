import React from 'react';
import './EditProfil.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const EditProfile = () => {
  return (
    <div>
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/395447242_3503885619884211_368375593821013901_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y7Fc4Fs9iTUAX-_c02n&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfARZtDWf6Y3LJCyCnLv4V92uM568ZqwyXd6zuP-7AOwhQ&oe=655A08EF"
              alt="Profile"
            />
            <span className="font-weight-bold">Ghzel dawser</span>
            <span className="text-black-50">dawser.ghzel@gmail.com</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="surname"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter phone number"
                  value=""
                />
              </div>
              {/* Continue adding more form fields */}
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="country"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="state"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button btn5" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            
            <br />
            </div>
            
        </div>
      </div>
      <br></br>
      
    </div>
    <Link to={'/'} ><Button className='btdaw' variant="outline-secondary">Home</Button>{' '}</Link>
    </div>
  );
};

export default EditProfile;
