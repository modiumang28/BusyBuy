import { useDispatch } from "react-redux";
import { actions } from "../redux/reducers/productReducer";

function ProductCard(props) {
  const dispatch = useDispatch();
  const { title, price, img, isInCart } = props.product;

  return (
    <div className="product">
      <div className="productImg">
        <img src={img} alt="product-image" />
      </div>
      <div className="productTitle">{title}</div>
      <div className="productPrice">{price}</div>
      <button
        onClick={() =>
          isInCart
            ? alert("Increase product count!")
            : dispatch(actions.toggleCart(title))
        }
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
