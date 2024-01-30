export type PRODUCT = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  description: string;
  createdAt: string;
};

export type PRODUCTS = {
  products: PRODUCT[];
};
