import React from 'react';
import './Profil.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Profil() {
  return (
    <div>
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card crd">
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <img src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/395447242_3503885619884211_368375593821013901_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y7Fc4Fs9iTUAX-_c02n&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfARZtDWf6Y3LJCyCnLv4V92uM568ZqwyXd6zuP-7AOwhQ&oe=655A08EF"
                      alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: '150px', zIndex: 1 }} />
                      
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <h5>Ghzel dawser</h5>
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
                      <p className="font-italic mb-1">Web Developer</p>
                      <p className="font-italic mb-1">Lives in New York</p>
                      <p className="font-italic mb-0">Photographer</p>
                    </div>
                    <Link to={'/Editprofile'} ><Button className='btdaw btdaw2' variant="outline-secondary">EditProfile</Button>{' '}</Link>
                  </div>
                  
                 
                </div>
                <br></br>
                <Link to={'/'} ><Button className='btdaw' variant="outline-secondary">Home</Button>{' '}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Profil;
