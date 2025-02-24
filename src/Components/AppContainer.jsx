import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppContainer = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppContainer;
