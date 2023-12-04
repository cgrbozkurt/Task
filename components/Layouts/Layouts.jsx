import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layouts = ({ children }) => {
  

  return (
    <div className="w-screen">
      <Header  />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layouts;
