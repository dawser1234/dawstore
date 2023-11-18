import axios from "axios";
import { GET_ALLPRODUCTS_FAIL, GET_ALLPRODUCTS_SUCCESS, ADD_PRODUCT,DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL } from "../Const/constProduct";
import { useDispatch } from "react-redux";

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/product");
    dispatch({
      type: GET_ALLPRODUCTS_SUCCESS,
      payload: res.data
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ALLPRODUCTS_FAIL,
      payload: err.message
    });
  }
};

export const addProduct = (formData,navigate) => async (dispatch) => {
  
  try {
    console.log('Sending form data:', formData);
    const res = await axios.post('http://localhost:5000/api/product', formData);
    console.log('Response from server:', res.data);
    
    dispatch
      (getAllProducts(),{
      type: ADD_PRODUCT,
      payload: res.data,
    });
    navigate('/');
  } catch (error) {
    console.error('Error adding product:', error);
    // Handle error and dispatch an appropriate action if needed
  }
};
export const deleteProduct = (productId) => async (dispatch) => {
  try {
    // Send a request to delete the product with the specified ID
    const res = await axios.delete(`http://localhost:5000/api/product/${productId}`);
    
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId,
    });

    // After deleting, fetch the updated product list
    dispatch(getAllProducts());
  } catch (error) {
    console.error('Error deleting product:', error);
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.message,
    });
    // Handle error and dispatch an appropriate action if needed
  }
};

