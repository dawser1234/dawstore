// src/Redux/Actions/actionProduct.js

import axios from "axios";
import {
  GET_ALLPRODUCTS_FAIL,
  GET_ALLPRODUCTS_SUCCESS,
  ADD_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  GET_ONE_PRODUCT_SUCCESS,
  GET_ONE_PRODUCT_FAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../Const/constProduct";

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/product");
    dispatch({
      type: GET_ALLPRODUCTS_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ALLPRODUCTS_FAIL,
      payload: err.message,
    });
  }
};

export const addProduct = (formData, navigate) => async (dispatch) => {
  try {
    console.log('Sending form data:', formData);
    const res = await axios.post('http://localhost:5000/api/product', formData);
    console.log('Response from server:', res.data);

    dispatch({
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
    const res = await axios.delete(`http://localhost:5000/api/product/${productId}`);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId,
    });

    dispatch(getAllProducts()); // Fetch updated product list after delete
  } catch (error) {
    console.error('Error deleting product:', error);
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.message,
    });
    // Handle error and dispatch an appropriate action if needed
  }
};

export const editProduct = (productId, updatedData,navigate) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/product/${productId}`, updatedData);

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: res.data,
    });
    navigate('/');

    dispatch(getAllProducts()); // Fetch updated product list after edit
  } catch (error) {
    console.error('Error editing product:', error);
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.message,
    });
    // Handle error and dispatch an appropriate action if needed
  }
};

export const getOneProduct = (productId) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/product/${productId}`);

    dispatch({
      type: GET_ONE_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error('Error fetching product details:', error);
    dispatch({
      type: GET_ONE_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};
export const addToCart = (product) => {
  const productToAdd = {
    ...product,
    quantity: 1, // Set an initial quantity
  };

  return {
    type: ADD_TO_CART,
    payload: productToAdd,
  };
};

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
export const updateCartItemQuantity = (productId, newQuantity) => {
  return {
    type: 'UPDATE_CART_ITEM_QUANTITY',
    payload: {
      productId,
      newQuantity,
    },
  };
};
