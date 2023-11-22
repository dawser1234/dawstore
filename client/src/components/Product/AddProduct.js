import React, { useState } from 'react';
import './AddProduct.css';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../Redux/Actions/actionProduct'; // Update the path

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    // Handle image selection
    const file = e.target.files[0];
    setProductImage(file);
  };

  const handleAddProduct = (e) => {
    e.preventDefault()
    // Create a FormData object to handle the image upload
    const Data = new FormData();
    Data.append('title', productName);
    Data.append('price', productPrice);
    Data.append('description', productDescription);
    Data.append('file', productImage);

    // Dispatch the addProduct action with the FormData
    dispatch(addProduct(Data,navigate));


  };
console.log(productName);
  return (
    <div className="container">
      <form role="form"   onSubmit={handleAddProduct}  >
        <div className="form-group">
          <label htmlFor="productname" className="loginFormElement">
            Name:
          </label>
          <input
            className="form-control"
            id="productname"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productprice" className="loginFormElement">
            Product Price:
          </label>
          <input
            className="form-control"
            id="productprice"
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="loginformelement" htmlFor="productdescription">
            Product Description:
          </label>
          <input
            id="productdescription"
            className="form-control input-lg"
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="control-label">Product Image:</label>
          <input
            className="filestyle"
            data-icon="false"
            type="file"
            onChange={handleImageChange}
          />
        </div>

        <br />
        <Button
          className="btdaw"
          variant="outline-secondary"
          onClick={handleAddProduct}
        >
          Add product
        </Button>{' '}
        <br />
        <br />
        <Link to={'/'}>
          <Button className="btdaw" variant="outline-secondary">
            Home
          </Button>{' '}
        </Link>
      </form>
    </div>
  );
};

export default AddProduct;
