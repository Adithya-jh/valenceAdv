import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";
import Prod_info from "../../Components/Product_/Prod_info";
import Prod_img from "../../Components/Product_/Prod_img";
import Related_prod from "../../Components/Product_/Related_prod";
function prod() {
  return (
    <div className="prod">
      <Navbar />
      <div className="product-hero">
        <Prod_img />
        <main className="product-hero-1">
          <Prod_info />
        </main>
        {/* <Footer /> */}
      </div>
      <Related_prod />
    </div>
  );
}

export default prod;
