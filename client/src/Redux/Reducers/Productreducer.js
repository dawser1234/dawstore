import axios from "axios";
import { GET_ALLPRODUCTS_SUCCESS, ADD_PRODUCT,DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL } from "../Const/constProduct";

const initialState = {
  products: [],
  oneproduct: {},
  error: {}
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLPRODUCTS_SUCCESS:
      return { ...state, products: action.payload };

    case ADD_PRODUCT:
      return { ...state};
      case DELETE_PRODUCT_SUCCESS:
      // Filter out the deleted product from the products array
      const updatedProducts = state.products.filter(product => product.id !== action.payload);

      return {
        ...state,
        products: updatedProducts,
      };

    case DELETE_PRODUCT_FAIL:
      // Handle delete failure if needed
      return { ...state, error: action.payload };
      

    default:
      return state;
  }
};
