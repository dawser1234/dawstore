import React, { useEffect }  from 'react';
import './Profil.css'
import { Link,  useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {  useDispatch, useSelector } from 'react-redux'
import { getCurrent, logout } from '../../Redux/Actions/actionUser';

function Profil() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const user = useSelector(state => state.userReducer.currentUser)
   
    useEffect(() => {
      dispatch(getCurrent())
    }, [])
    console.log(user)
    
  return (
    <div>
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card crd">
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <img src={user&&user.img}
                      alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: '150px', zIndex: 1 }} />
                      
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <h5> </h5>
                    <p>tunisia</p>
                  </div>
                </div>
                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="d-flex justify-content-end text-center py-1">
                    
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                      <p className="font-italic mb-1">{user&&user.email}</p>
                      <p className="font-italic mb-1">{user&&user.name}</p>
                      
                    </div>
                    <Link to={'/Editprofile'} ><Button className='btdaw btdaw2' variant="outline-secondary">EditProfile</Button>{' '}</Link>
                  </div>
                  
                 
                </div>
                <br></br>
                <Link to={'/'} ><Button className='btdaw' variant="outline-secondary">Home</Button>{' '}</Link>
                <br></br>
                 <Button className='btdaw' variant="outline-secondary" onClick={() => dispatch(logout(),navigate("/"))}>logout</Button>{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Profil;
