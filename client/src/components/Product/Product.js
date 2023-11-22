import React from 'react'
import './Product.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../Redux/Actions/actionProduct';
import { useDispatch } from 'react-redux';
function Product({el}) {
  const dispatch = useDispatch();
  const handleDelete = (productId) => {
    // Dispatch the deleteProduct action with the product ID
    dispatch(deleteProduct(productId));};
    
  return (
    
  <div className="text-center container py-5">
    <h4 className="mt-4 mb-5"><strong></strong></h4>
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card carttpro">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img src={el.img} className="w-100" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100 pro">
                  <h5><span className="badge bg-primary ms-2">{el.price}</span></h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </div>
            </a>
          </div>
          <div className="card-body crt">
            <a href className="text-reset">
              <h5 className="card-title mb-3">{el.title}</h5>
            </a>
            <a href className="text-reset">
              <p>{el.description}</p>
              <button type="button" class="btn btn-warning" onClick={() => handleDelete(el._id)}>delete</button>
              <br></br>
              <br></br>
             <Link to={`/EditProduct/${el._id}`}><button type="button" class="btn btn-warning">edit</button></Link>
            </a>
            <h6 className="mb-3">{el.price}</h6>
          </div>
        </div>
      </div>
      </div>
      
  </div>

  )
}

export default Product