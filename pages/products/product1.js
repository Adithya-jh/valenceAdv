import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";


function productDetails() {

  return (
    <div className="product-page-main">
      <Navbar />
      <div className="main-product-container">
        <div className="products-navbar">
          <div className="product-navigation">
            <p>Home <i class="fa-solid fa-angle-right"></i></p>
            <p>Products <i class="fa-solid fa-angle-right"></i></p>
            <p>Category <i class="fa-solid fa-angle-right"></i></p>
            <p>Product1</p>
          </div>
          <div className="product-next-prev">
            <p>PREV</p>
            <p>NEXT</p>
          </div>
        </div>
        <div className="product-details-container">
          <img className="prod-image" src="https://i2.wp.com/konte.uix.store/wp-content/uploads/2018/09/1-11.jpg?fit=1400%2C1600&ssl=1" />
          <div className="emptyClass"></div>
          <div className="products-info-container">
            <div className="prod-intro">
              <h1>VAL VAC TUBE MT</h1>
              <h2>Self-Releasing Vacuum Bagging Film</h2>
              <p>Medium Temperature</p>
            </div>

            <div className="prod-infos">
              <div className="prod-prop">
                <h3>Thickness</h3>
                <div class="wrapper">
                  <span class="minus">-</span>
                  <span class="num">1</span>
                  <span class="plus">+</span>
                </div>
              </div>

              <div className="prod-prop">
                <h3>Roll Size</h3>
                <div class="wrapper">
                  <span class="minus">-</span>
                  <span class="num">1</span>
                  <span class="plus">+</span>
                </div>
              </div>

              <div className="prod-prop">
                <h3>Quantity</h3>
                <div class="wrapper">
                  <span class="minus">-</span>
                  <span class="num">1</span>
                  <span class="plus">+</span>
                </div>
              </div>
            </div>

            <div className="prod-add">
              <button className="prod-add-button">ADD TO CART</button>
            </div>

            <div className="prod-download-section">
              <i class="fa-solid fa-download"></i>
              <p>Download Technical Datasheet</p>
            </div>
          </div>
        </div>
      </div>
      <div className="related-products">
        
      </div>
      <Footer />
    </div>
  );
}

export default productDetails;