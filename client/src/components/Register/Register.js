import React from 'react';
import './Register.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Register = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card carde1">
          <div className="card-header">
            <h3>Sign In</h3>
            <div className="d-flex justify-content-end social_icon">
              <span>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </span>
              <span>
                <FontAwesomeIcon icon={faGooglePlusSquare} />
              </span>
              <span>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </span>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                </div>
                <input type="text" className="form-control" placeholder="username" />
              </div>
              <br></br>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <input type="email" className="form-control" placeholder="email" />
              </div>
              <br></br>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                </div>
                <input type="password" className="form-control" placeholder="password" />
              </div>
              <br></br>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                </div>
                <input type="password" className="form-control" placeholder="confirm password" />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />Remember Me
              </div>
              <div className="form-group">
                <input type="submit" value="Register" className="btn float-right login_btn" />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Already have an account? <a href="#">Sign In</a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Link to={'/'} ><Button className='btdaw' variant="outline-secondary">Home</Button>{' '}</Link>  
       
    </div>

  );
};

export default Register;
