import {
  ADD_TO_CART,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_FROM_CART,
} from "./ActionTypes";

export const fetchAPIRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchAPISuccess = () => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload,
  };
};

export const fetchAPIFailure = () => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload,
  };
};

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
}
