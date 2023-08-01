import React from "react";
import LayoutUser from "./LayoutUser/LayoutUser";
import Footer from "./Footer/Footer";
import ListProductsHome from "./ListProductsHome/ListProductsHome";


const Home = () => {
  return (
    <>
      <LayoutUser />
 
      <ListProductsHome/>

      <Footer/>
    </>
  );
};

export default Home;
