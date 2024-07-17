import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "./redux/fetchApi";
import "./style.scss";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./redux/ActionTypes";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const productsData = useSelector((state) => state);

  const addToCartFun = (data) => {
    dispatch({ type: ADD_TO_CART, payload: data });
  };

  const removeFromCartFun = (data) => {
    const updatedCartList = cartList.filter((item) => item.id !== data.id);
    dispatch({ type: REMOVE_FROM_CART, payload: updatedCartList });
    setCartList(updatedCartList);
  };

  useEffect(() => {
    // Fetch data from API
    dispatch(fetchApi());
  }, [dispatch]);

  // Update products and cartList when productsData changes
  useEffect(() => {
    if (productsData) {
      setProducts(productsData.products);
      setCartList(productsData.cartItems);
    }
  }, [productsData]);

  return (
    <div>
      <div className="header">
        <p></p>
        <h1>List of Products</h1>
        <h1>
          Cart <sup>{cartList?.length}</sup>
        </h1>
      </div>
      {productsData?.loading && (
        <center>
          <h1>Loading the data...</h1>
        </center>
      )}
      {productsData?.error && (
        <center>
          <h1>Something went wrong</h1>
        </center>
      )}
      <div className="product-page">
        {products?.map((product) => (
          <div className="product-card" key={product.id}>
            <h4 className="title">Name: {product.title}</h4>
            <img src={product.image} alt="product-image" />
            <h4>
              Price: <b>{product.price}</b> INR
            </h4>
            {!cartList.find((item) => item.id === product.id) && (
              <button onClick={() => addToCartFun(product)}>Buy Now</button>
            )}
            {cartList.find((item) => item.id === product.id) && (
              <button onClick={() => removeFromCartFun(product)}>Remove</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
