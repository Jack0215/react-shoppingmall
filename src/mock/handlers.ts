import { HttpResponse, graphql } from "msw";
import { v4 as uuid } from "uuid";
import { GET_PRODUCT, GET_PRODUCTS } from "../graphql/products";

const allPosts = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageUrl: `https://picsum.photos/id/${i + 1}/200/300/`,
  price: 5000,
  title: `임시상품${i + 1}`,
  description: `임시상세내용${i + 1}`,
  createdAt: new Date(1746567890123 + i * 1000 * 60 * 10).toString(),
}));
export const handlers = [
  graphql.query(GET_PRODUCTS, () => {
    return HttpResponse.json({
      data: {
        // Convert all posts to an array
        // and return as the "posts" root-level property.
        products: allPosts,
      },
    });
  }),
  graphql.query(GET_PRODUCT, () => {
    console.log("HttpResponse.json", HttpResponse.json());
    return HttpResponse.json({
      data: {
        // Convert all posts to an array
        // and return as the "posts" root-level property.
        products: allPosts[0],
      },
    });
  }),
];
