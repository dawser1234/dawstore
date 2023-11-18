import React, { useState } from 'react';
import './AddProduct.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const EditProduct = () => {
  return (
    <div className="container">
      {/* ... Your existing code ... */}
      
      
        <div className="col-md-6">
          <h1      >      EditProduct </h1>
        </div>
      

      
      <div className="row">
        <div className="col-md-6">
          <form role="form" >
            <select
              className="form-control"
              id="productSelect"
              name="category">
             
              <option>Bar Soaps</option>
              <option>Lotions</option>
              <option>Creams</option>
            </select>

            <div className="form-group">
              <label htmlFor="productname" className="loginFormElement">
                Name:
              </label>
              <input
                className="form-control"
                id="productname"
                type="text"
                name="name"
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="productprice" className="loginFormElement">
                Product Price
              </label>
              <input
                className="form-control"
                id="productprice"
                type="text"
                name="price"
                
              />
            </div>

            <div className="form-group">
              <label className="control-label">Product Image</label>
              <input
                className="filestyle"
                data-icon="false"
                type="file"
                name="image"
                
              />
            </div>

            <div className="form-group">
              <label className="loginformelement" htmlFor="productdescription">
                Product Description
              </label>
              <input
                id="productdescription"
                className="form-control input-lg"
                placeholder="Large"
                type="text"
                name="description"
                
              />
            </div>
            <br></br>

            <Button className='btdaw' variant="outline-secondary">Save change</Button>{' '}
            <br></br>
            <br></br>

               <Link to={'/'} ><Button className='btdaw' variant="outline-secondary">Home</Button>{' '}</Link>
          </form>
        </div>
      </div>
      {/* ... Your existing code ... */}
    </div>
  );
};

export default EditProduct;
