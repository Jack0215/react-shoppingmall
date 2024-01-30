import { PRODUCT } from "../../type/products";

const ProductDetail = ({
  item: { id, title, imageUrl, description, price },
}: {
  item: PRODUCT;
}) => (
  <div>
    <p className="products-detail_title">{title}</p>
    <img className="products-detail_image" src={imageUrl} alt="" />
    <span className="products-detail_description">{description}</span>
    <span className="products-detail_price">${price}</span>
  </div>
);

export default ProductDetail;
