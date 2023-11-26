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
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../Const/constProduct";

const initialState = {
  products: [],
  oneproduct: {},
  cart: [],
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
      case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload),
      };
      case 'UPDATE_CART_ITEM_QUANTITY':
  return {
    ...state,
    cart: state.cart.map(item =>
      item._id === action.payload.productId
        ? { ...item, quantity: parseInt(action.payload.newQuantity, 10) || 0 }
        : item
    ),
  };
        

    default:
      return state;
  }
};
