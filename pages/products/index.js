import { propTypes } from "google-map-react";
import { withRouter, WithRouter } from "next/router";
import { useState } from "react";
import Link from 'next/link'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const Products = withRouter((props) => {
    const [categories, setCategories] = useState(0)
    const [temp, setTemp] = useState(0)
    var forwardLink = "/products?temp=" + temp + "&" + "filter=" + categories;

    console.log(props.router.query.filter)
    return (
        <div className="products-section">
            <Navbar />
            <div className="products-container">
                <h1 className="product-title">Products</h1>
                <div className="product-header-container">
                    <h2>You're looking for
                        <span>
                            <select name="temp" id="temp" onChange={(e) => { setTemp(e.target.value) }} >
                                <option value="everything">everything</option>
                                <option value="120" selected={props.router.query.temp === "120" ? true : false}>Room temperature to 120 °C</option>
                                <option value="140_180" selected={props.router.query.temp === "140_180" ? true : false}>140 °C to 180 °C</option>
                                <option value="190_204" selected={props.router.query.temp === "190_204" ? true : false}>190 °C to 204 °C</option>
                                <option value="204_260" selected={props.router.query.temp === "204_260" ? true : false}>204 °C to 260 °C</option>
                                <option value="resin_vacuum" selected={props.router.query.temp === "resin_vacuum" ? true : false}>Resin & Vacuum Assisted Infusion</option>
                            </select>
                        </span>
                        in <span>
                            <select name="categories" id="categories" onChange={(e) => { setCategories(e.target.value) }}>
                                <option value={1}>all categories</option>
                                <option value={2} selected={props.router.query.filter === 1 ? true : false}>Vacuum bagging films</option>
                                <option value={3} selected={props.router.query.filter === 2 ? true : false}>Release films</option>
                                <option value={4} selected={props.router.query.filter === 3 ? true : false}>Release fabric & peel ply</option>
                                <option value={5} selected={props.router.query.filter === 4 ? true : false}>Pressure sensitive tapes</option>
                                <option value={6} selected={props.router.query.filter === 5 ? true : false}>Sealant tapes</option>
                                <option value={7} selected={props.router.query.filter === 6 ? true : false}>Resin flow mesh</option>
                                <option value={8} selected={props.router.query.filter === 7 ? true : false}>Resin feed & vacuum manifolds</option>
                                <option value={9} selected={props.router.query.filter === 8 ? true : false}>Tubing  & connectors</option>
                                <option value={10} selected={props.router.query.filter === 9 ? true : false}>Infusion tooling & tools</option>
                                <option value={11} selected={props.router.query.filter === 10 ? true : false}>Breathers & Bleeders</option>
                                <option value={12} selected={props.router.query.filter === 11 ? true : false}>Self-Releasing Vacuum Bag Films</option>
                            </select>
                        </span>
                        {(categories > 0 || temp!=0) && <Link href={forwardLink}><button>search</button></Link>}
                    </h2>
                </div>
                <div className="product-card-container">
                <div class="product-card">
                    <figure>
                        <img src="https://i2.wp.com/konte.uix.store/wp-content/uploads/2018/09/1-3.jpg?resize=680%2C920&ssl=1" alt="t-shirt"/>
                    </figure>
                    <section className="product-card-space">                  
                    </section>
                    
                    <section class="details">
                        <div class="min-details">
                            <h1>Product 1</h1>
                        </div>                       
                        <a href="#" class="productToCart">add to cart</a>
                    </section>
                </div>
                <div class="product-card">
                    <figure>
                        <img src="https://i0.wp.com/konte.uix.store/wp-content/uploads/2018/09/1-23.jpg?resize=680%2C920&ssl=1" alt="t-shirt"/>
                    </figure>
                    <section className="product-card-space">                  
                    </section>
                    
                    <section class="details">
                        <div class="min-details">
                            <h1>Product 2</h1>
                        </div>                       
                        <a href="#" class="productToCart">add to cart</a>
                    </section>
                </div>
                <div class="product-card">
                    <figure>
                        <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="t-shirt"/>
                    </figure>
                    <section className="product-card-space">                  
                    </section>
                    
                    <section class="details">
                        <div class="min-details">
                            <h1>Product 3</h1>
                        </div>                       
                        <a href="#" class="productToCart">add to cart</a>
                    </section>
                </div>
                <div class="product-card">
                    <figure>
                        <img src="https://i2.wp.com/konte.uix.store/wp-content/uploads/2018/09/1-24.jpg?resize=680%2C920&ssl=1" alt="t-shirt"/>
                    </figure>
                    <section className="product-card-space">                  
                    </section>
                    
                    <section class="details">
                        <div class="min-details">
                            <h1>Product 4</h1>
                        </div>                       
                        <a href="#" class="productToCart">add to cart</a>
                    </section>
                </div>
                <div class="product-card">
                    <figure>
                        <img src="https://i2.wp.com/konte.uix.store/wp-content/uploads/2018/09/1-4.jpg?resize=680%2C920&ssl=1" alt="t-shirt"/>
                    </figure>
                    <section className="product-card-space">                  
                    </section>
                    
                    <section class="details">
                        <div class="min-details">
                            <h1>Product 5</h1>
                        </div>                       
                        <a href="#" class="productToCart">add to cart</a>
                    </section>
                    
                </div>

                </div>
                
            </div>
            <Footer/>
        </div >
    )
})


export default Products;