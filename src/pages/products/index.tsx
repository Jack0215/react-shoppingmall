import { useQuery } from "react-query";
import { QUERYKEYS, graphqlFetcher } from "../../queryClient";
import { PRODUCT } from "../../type/products";
import ProductItem from "../../components/products/item";
import { GET_PRODUCTS, PRODUCTS } from "../../graphql/products";

const ProductList = () => {
  // const { data } = useQuery<PRODUCTS>(QUERYKEYS.PRODUCTS, () =>
  //   graphqlFetcher(GET_PRODUCTS)
  // );
  const { data } = useQuery<PRODUCTS>(QUERYKEYS.PRODUCTS, () =>
    graphqlFetcher(GET_PRODUCTS)
  );
  console.log("data", data);
  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.products?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
