// src/Redux/Reducers/productReducer.js

import {
  GET_ALLPRODUCTS_SUCCESS,
  ADD_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  GET_ONE_PRODUCT_SUCCESS,
  GET_ONE_PRODUCT_FAIL,
} from "../Const/constProduct";

const initialState = {
  products: [],
  oneproduct: {},
  error: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLPRODUCTS_SUCCESS:
      return { ...state, products: action.payload };

    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case DELETE_PRODUCT_SUCCESS:
      const updatedProducts = state.products.filter((product) => product._id !== action.payload);
      return {
        ...state,
        products: updatedProducts,
      };

    case DELETE_PRODUCT_FAIL:
      return { ...state, error: action.payload };

    case UPDATE_PRODUCT_SUCCESS:
      const updatedProductsEdit = state.products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
      return {
        ...state,
        products: updatedProductsEdit,
      };

    case UPDATE_PRODUCT_FAIL:
      return { ...state, error: action.payload };

    case GET_ONE_PRODUCT_SUCCESS:
      return { ...state, oneproduct: action.payload };

    case GET_ONE_PRODUCT_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
