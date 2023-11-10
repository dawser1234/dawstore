import React from 'react'
import './Product.css'
function Product() {
    const products=[1,2,3]
  return (
    <div className='bac'>
    <section>
  <div className="text-center container py-5">
    <h4 className="mt-4 mb-5"><strong>Bestsellers</strong></h4>
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card carttpro">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp" className="w-100" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100 pro">
                  <h5><span className="badge bg-primary ms-2">New</span></h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
              </div>
            </a>
          </div>
          <div className="card-body crt">
            <a href className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">$61.99</h6>
          </div>
        </div>
      </div>
      </div>
  </div>
</section>

    </div>
  )
}

export default Product