import { useQuery } from "react-query";
import { QUERYKEYS, graphqlFetcher } from "../../queryClient";
import { PRODUCTS } from "../../type/products";
import { useParams } from "react-router";
import ProductDetail from "../../components/products/detail";
import { GET_PRODUCT } from "../../graphql/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<PRODUCTS["products"]>(
    [QUERYKEYS.PRODUCTS, id],
    () => graphqlFetcher<PRODUCTS["products"]>(GET_PRODUCT, { id })
  );
  if (!data) return null;
  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail item={data.products} />
    </div>
  );
};
export default ProductDetailPage;
