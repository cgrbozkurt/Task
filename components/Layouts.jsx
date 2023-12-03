import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layouts = ({ children }) => {
  

  return (
    <div className="layout  ">
      <Header  />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layouts;
