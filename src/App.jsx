import React from "react";
import Footer from "./HomePage/FooterPage/Footer";
import HomePage from "./HomePage/NavbarPage/HomePage";
import Order from "./HomePage/OrderPage/Order";
import Product from "./HomePage/ProductPage/Product";
import WrapperPage from "./HomePage/WrapperPage/WrapperPage";

const App = () => {
  return (
    <div>
      <HomePage />
      <WrapperPage />
      <Product />
      <Order />
      <Footer />
    </div>
  );
};

export default App;
