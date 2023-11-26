import React, { useState } from 'react';
import './Register.css';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/Actions/actionUser';


const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [img, setimg] = useState();
  
  const navigate = useNavigate();
  const Disptach=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hi");
    if(img==null) 
    {alert(" please add your photo") }
  
  
    const data = new FormData();
    
     data.append("password",password)
     data.append("email", email)
     data.append("name",name)
     data.append("file",img)
 
     Disptach(addUser(data, navigate))
     console.log(data)
  }

 
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
                <input type="text" className="form-control" placeholder="username" onChange={(e) => setname(e.target.value)} />
              </div>
              <br></br>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <input type="email" className="form-control" placeholder="email" onChange={(e) => setemail(e.target.value)} />
              </div>
              <br></br>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                </div>
                <input type="password" className="form-control" placeholder="password" onChange={(e) => setpassword(e.target.value)} />
              </div>
              <br></br>
              <div className="input-group form-group">
              
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                </div>
                <input type="password" className="form-control" placeholder="confirm password" onChange={(e) => setpassword(e.target.value)} />
                <label htmlFor="passw "> photo</label>
              <input
                type="file"  onChange={(e) => setimg(e.target.files[0])}/>
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />Remember Me
              </div>
              <div className="form-group">
                <input type="submit" value="Register" className="btn float-right login_btn"  onClick={handleSubmit}  />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
             
            </div>
            <div className="d-flex justify-content-center">
            
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
