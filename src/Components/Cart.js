import { useSelector } from "react-redux";
import { productSelector } from "../redux/reducers/productReducer";
import CartItem from "./CartItem";

function Cart() {
  const products = useSelector(productSelector).products.filter(
    (product, i) => product.isInCart === true
  );
  return (
    <div className="cartContainer">
      <div className="priceContainer">
        <div className="price">Total Price: 0</div>
        <button className="purchaseBtn">Purchase</button>
      </div>
      <div className="cartItemContainer">
        {products.map((product, i) => (
          <CartItem product={product} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
