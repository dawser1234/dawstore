import React, { useState, useEffect } from 'react';
import './AddProduct.css';
import Button from 'react-bootstrap/Button';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct,getOneProduct } from '../../Redux/Actions/actionProduct'; // Adjust the path accordingly

const EditProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { id} = useParams();

const [update, setupdate] = useState()
  const [img, setimg] = useState()
  

  
  useEffect(() => {
    dispatch(getOneProduct(id)); // Fetch product details when the component mounts
  }, [id]);
  

  const oneproduct= useSelector(state=> state.productReducer.oneproduct);
  console.log(oneproduct);


useEffect(() => {

setupdate(oneproduct)



}, [])

 
  const handleSaveChange = (e) => {
    e.preventDefault();
  const data= new FormData
data.append('title',update.title)
data.append('price',update.price)
data.append('description',update.description)
data.append('file',img)


   dispatch(editProduct(id, data,navigate));
  };

  return (
    <div className="container">
      <div className="col-md-6">
        <h1>Edit Product</h1>
      </div>

      <div className="row">
        <div className="col-md-6">
          <form role="form">
           

            <div className="form-group">
              <label  htmlFor="productName">Name:</label>
              
              <input
                className="form-control"
                id="productName"
                type="text"
                name="name"
            placeholder={oneproduct&&oneproduct.title}
               onChange={(e)=>setupdate({...update,title:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label htmlFor="productPrice">Product Price:</label>
              <input
                className="form-control"
                id="productPrice"
                type="text"
                name="price"
                placeholder={oneproduct&&oneproduct.price}
                onChange={(e)=>setupdate({...update,price:e.target.value})}
               
              />
            </div>

            <div className="form-group">
              <label htmlFor="productImage">Product Image:</label>
              <input
                className="filestyle"
                data-icon="false"
                type="file"
                name="image"
                placeholder={oneproduct&&oneproduct.file}
                onChange={(e)=>setimg(e.target.files[0])}
               
              />
            </div>

            <div className="form-group">
              <label htmlFor="productDescription">Product Description:</label>
              <input
                id="productDescription"
                className="form-control"
                type="text"
                name="description"
                placeholder={oneproduct&&oneproduct.description}
                onChange={(e)=>setupdate({...update,description:e.target.value})}
              
              />
            </div>

            <br />

            <Button className="btdaw" variant="outline-secondary" onClick={handleSaveChange}>
              Save change
            </Button>
            <br />
            <br />

            <Link to={'/'}>
              <Button className="btdaw" variant="outline-secondary">
                Home
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
