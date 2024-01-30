import { PRODUCT } from "../../type/products";
import { Link } from "react-router-dom";
const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: PRODUCT) => (
  <li className="products-item">
    <Link to={`/products/${id}`}>
      <p className="products-item_title">{title}</p>
      <img className="products-item_image" src={imageUrl} alt="" />
      <span className="products-item_price">${price}</span>
    </Link>
  </li>
);
export default ProductItem;
