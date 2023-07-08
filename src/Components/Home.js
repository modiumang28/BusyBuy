import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, productSelector } from "../redux/reducers/productReducer";
import Products from "./Products";

function Home() {
  const dispatch = useDispatch();
  const { price, category } = useSelector(productSelector);
  return (
    <>
      <div className="inputContainer">
        <input type="text" placeholder="Search By Name" />
      </div>
      <div className="main">
        <div className="sidebar">
          <div className="priceRangeContainer">
            <label htmlFor="price">Price: {price}</label>
            <input
              type="range"
              min="1"
              max="19999"
              id="price"
              name="price"
              value={price}
              step="10"
              onChange={(e) => dispatch(actions.setPrice(e.target.value))}
            />
          </div>
          <div>
            <input
              type="checkbox"
              value={category ? "" : "men"}
              onChange={(e) => dispatch(actions.setCategory(e.target.value))}
            />{" "}
            Men's Clothing
          </div>
          <div>
            <input
              type="checkbox"
              value={category ? "" : "women"}
              onChange={(e) => dispatch(actions.setCategory(e.target.value))}
            />{" "}
            Women's Clothing
          </div>
          <div>
            <input
              type="checkbox"
              value={category ? "" : "jewelery"}
              onChange={(e) => dispatch(actions.setCategory(e.target.value))}
            />{" "}
            Jewelery
          </div>
          <div>
            <input
              type="checkbox"
              value={category ? "" : "electronics"}
              onChange={(e) => dispatch(actions.setCategory(e.target.value))}
            />
            Electronics
          </div>
        </div>
        <div className="productsContainer">
          <Products />
        </div>
      </div>
    </>
  );
}

export default Home;
