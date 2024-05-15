import React from "react";

import Product from "../Navbar/Product/Product";
import Landing from "../Landing/Landing";
import Footer from "../Navbar/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Landing/>
      <Product/>
      <Footer/>
    </div>
  );
};

export default Home;
