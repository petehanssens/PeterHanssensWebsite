import PropTypes from "prop-types";
import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";


function Layout({ children }) {
  return (
    <>
      <Navbar />

        {children}

      <Footer />
      
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
