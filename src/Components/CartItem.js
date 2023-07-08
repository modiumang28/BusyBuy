import { useDispatch } from "react-redux";
import { actions } from "../redux/reducers/productReducer";

function CartItem(props) {
  const { title, price, img, qty } = props.product;
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <div className="product">
        <div className="productImg">
          <img src={img} alt="product-image" />
        </div>
        <div className="productTitle">{title}</div>
        <div className="productPrice">{price}</div>
        <div className="icons">
          <i
            className="fa-solid fa-circle-plus"
            onClick={() => dispatch(actions.increaseQty(title))}
          ></i>
          <span>{qty}</span>
          <i
            className="fa-solid fa-circle-minus"
            onClick={() => dispatch(actions.decreaseQty(title))}
          ></i>
        </div>
        <button onClick={() => dispatch(actions.toggleCart(title))}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CartItem;
