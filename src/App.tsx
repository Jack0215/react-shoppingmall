import { Route, Routes } from "react-router";
import MainPage from "./pages";
import ProductList from "./pages/products";
import ProductDetail from "./pages/products/[id]";
import Cart from "./components/cart";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/products/:id" element={<ProductDetail />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};

export default App;
