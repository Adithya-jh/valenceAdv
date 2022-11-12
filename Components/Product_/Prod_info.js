import React from "react";

function Prod_info() {
  return (
    <div className="prod-main">
      <div className="prod-p-n">
        <div className="prev-next-prod">PREV</div>
        <div className="prev-next-prod">NEXT</div>
      </div>

      <div className="prod-intro">
        <div className="prod-intro-1">Long Sleeve Tee</div>
        <div className="prod-intro-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </div>
        <div className="prod-intro-3">3 Customer Reviews</div>
      </div>

      <div className="prod-price">$45 – $220</div>

      <div className="prod-infos">
        <div className="prod-info">
          <div className="prod-info-1">Text Printed T-Shirt</div>
          <button className="prod-info-2">SELECT OPTIONS</button>
          <div className="prod-info-3">$45</div>
        </div>

        <div className="prod-info">
          <div className="prod-info-1">The Slouch Dress</div>
          <button className="prod-info-2">SELECT OPTIONS</button>
          <div className="prod-info-3">$45</div>
        </div>

        <div className="prod-info">
          <div className="prod-info-1">High Rise Classic Jeans</div>
          <button className="prod-info-2">SELECT OPTIONS</button>
          <div className="prod-info-3">$45</div>
        </div>
      </div>

      <div className="prod-add">
        <button className="prod-add-button">ADD TO CART</button>
      </div>

      <div className="prod-sups">
        <div className="prod-sup prod-sup-1">
          <div>SKU</div>
          <div>CATEGORY</div>
          <div>TAG</div>
        </div>

        <div className="prod-sup prod-sup-2">
          <div>013</div>
          <div>CLOTHES</div>
          <div>TOPS</div>
        </div>
      </div>
    </div>
  );
}

export default Prod_info;
