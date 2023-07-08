import { useSelector } from "react-redux";
import { productSelector } from "../redux/reducers/productReducer";
import ProductCard from "./ProductCard";

function Products() {
  let { products, price, category } = useSelector(productSelector);
  if (category) {
    products = products.filter((product, i) => product.category === category);
  }
  if (price) {
    products = products.filter((product, i) => product.price <= price);
  }
  return (
    <div>
      {products.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </div>
  );
}

export default Products;
