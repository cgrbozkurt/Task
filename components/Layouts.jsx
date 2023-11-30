import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";


const Layouts = ({ children }) => {


  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
      const handleScroll = () => {
        setSticky(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="layout-container h-screen overflow-y-scroll">
      <Header />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

export default Layouts;
