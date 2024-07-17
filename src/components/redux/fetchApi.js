import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./ActionTypes";

export const fetchApi = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      const response = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => res);
      console.log("🚀 ~ return ~ response:", response)
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response });
    } catch (error) {
      const errorMessage = "Products Not Found";
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: errorMessage });
    }
  };
};
