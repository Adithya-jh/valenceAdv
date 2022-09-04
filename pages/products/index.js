import OutsideClickHandler from "react-outside-click-handler";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const Products = withRouter((props) => {

    const [temp, setTemp] = useState(false);
    const [categories, setCategories] = useState(0);

    const [everythingClick, setEverythingClick] = useState(false);
    const [categoriesClick, setCategoriesClick] = useState(false);

    const temperature =
    {
        everything: "everything",
        _120: "Room temperature to 120 °C",
        _140_180: "140 °C to 180 °C",
        _190_204: "190 °C to 204 °C",
        _204_260: "204 °C to 260 °C",
        resin_vacuum: "Resin & Vacuum Assisted Infusion"
    }
    const filter = {
        0: "all categories",
        1: "Vacuum bagging films",
        2: "Release films",
        3: "Release fabric & peel ply",
        4: "Sealant tapes",
        5: "Pressure sensitive tapes",
        6: "Resin flow mesh",
        7: "Resin feed & vacuum manifolds",
        8: "Tubing  & connectors",
        9: "Infusion tooling & tools",
        10: "Breathers & Bleeders",
        11: "Self-Releasing Vacuum Bag Films",

    }

    useEffect(() => {
        setTemp(props.router.query.temp)
        setCategories(props.router.query.filter ? props.router.query.filter : 0)
    }, [props.router.query])

    var forwardLink = "/products?temp=" + temp + "&" + "filter=" + categories;



    const [imageIndex, setImageIndex] = useState(1);
    const [translateX, setTranslateX] = useState(0);

    const handleCarouselPrevious = () => {      
        if(imageIndex>1){
            setTranslateX(translateX + 300)
            setImageIndex(imageIndex - 1)
        }           
    }
    const handleCarouselNext = () => {
        if (imageIndex < 4) {
            setImageIndex(imageIndex + 1)
            setTranslateX(translateX - 300)
        }
    }

    return (
        <div className="products-section">
            <Navbar />
            <div className="products-container">
                <h1 className="product-title">Products</h1>
                <div className="product-header-container">
                    <h2>You're looking for
                        <span class="product-dropdown">

                            <OutsideClickHandler onOutsideClick={() => { setEverythingClick(false) }}>
                                <button class="product-dropbtn" onClick={() => { setEverythingClick(true) }}><h2>{temperature[temp]} <i class="fa-solid fa-angle-down"></i></h2></button>
                            </OutsideClickHandler>
                            <span class={everythingClick ? "product-dropdown-content active" : "product-dropdown-content"}>
                                <div onClick={() => { setTemp("everything") }} className={temp === "everything" && "product-dropdown-selected"}>everything</div>
                                <div onClick={() => { setTemp("_120") }} className={temp === "_120" && "product-dropdown-selected"}>Room temperature to 120 °C</div>
                                <div onClick={() => { setTemp("_140_180") }} className={temp === "_140_180" && "product-dropdown-selected"}>140 °C to 180 °C</div>
                                <div onClick={() => { setTemp("_190_204") }} className={temp === "_190_204" && "product-dropdown-selected"}>190 °C to 204 °C</div>
                                <div onClick={() => { setTemp("_204_260") }} className={temp === "_204_260" && "product-dropdown-selected"}>204 °C to 260 °C</div>
                                <div onClick={() => { setTemp("resin_vacuum") }} className={temp === "resin_vacuum" && "product-dropdown-selected"}>Resin & Vacuum Assisted Infusion</div>
                            </span>

                        </span>

                        in

                        <span class="product-dropdown">

                            <OutsideClickHandler onOutsideClick={() => { setCategoriesClick(false) }}>
                                <button class="product-dropbtn" onClick={() => { setCategoriesClick(true) }}><h2>{filter[categories]} <i class="fa-solid fa-angle-down"></i></h2></button>
                            </OutsideClickHandler>
                            <span class={categoriesClick ? "product-dropdown-content active" : "product-dropdown-content"}>
                                <div onClick={() => { setCategories(0) }} className={categories == 0 && "product-dropdown-selected"}>all categories</div>
                                <div onClick={() => { setCategories(1) }} className={categories == 1 && "product-dropdown-selected"}>Vacuum bagging films</div>
                                <div onClick={() => { setCategories(2) }} className={categories == 2 && "product-dropdown-selected"}>Release films</div>
                                <div onClick={() => { setCategories(3) }} className={categories == 3 && "product-dropdown-selected"}>Release fabric & peel ply</div>
                                <div onClick={() => { setCategories(4) }} className={categories == 4 && "product-dropdown-selected"}>Sealant tapes</div>
                                <div onClick={() => { setCategories(5) }} className={categories == 5 && "product-dropdown-selected"}>Pressure sensitive tapes</div>
                                <div onClick={() => { setCategories(6) }} className={categories == 6 && "product-dropdown-selected"}>Resin flow mesh</div>
                                <div onClick={() => { setCategories(7) }} className={categories == 7 && "product-dropdown-selected"}>Resin feed & vacuum manifolds</div>
                                <div onClick={() => { setCategories(8) }} className={categories == 8 && "product-dropdown-selected"}>Tubing  & connectors</div>
                                <div onClick={() => { setCategories(9) }} className={categories == 9 && "product-dropdown-selected"}>Infusion tooling & tools</div>
                                <div onClick={() => { setCategories(10) }} className={categories == 10 && "product-dropdown-selected"}>Breathers & Bleeders</div>
                                <div onClick={() => { setCategories(11) }} className={categories == 11 && "product-dropdown-selected"}>Self-Releasing Vacuum Bag Films</div>

                            </span>

                        </span>

                        {(categories || temp) && <Link href={forwardLink}><button>search</button></Link>}
                    </h2>
                </div>
                <div className="product-card-container">

                    <div class="product-card">
                        <figure>
                            <div class="carousel">
                                <button class="carousel__button previous" id="previous" onClick={handleCarouselPrevious}>{"<"}</button>
                                <div class="carousel__images" style={{transform:`translateX(${translateX}px)`}}>
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/4.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/2.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="" />
                                </div>
                                <button class="carousel__button next" id="next" onClick={handleCarouselNext}>{">"}</button>
                            </div>
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
                            <div class="carousel">
                                <button class="carousel__button previous" id="previous" onClick={handleCarouselPrevious}>{"<"}</button>
                                <div class="carousel__images" style={{transform:`translateX(${translateX}px)`}}>
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/4.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/2.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="" />
                                </div>
                                <button class="carousel__button next" id="next" onClick={handleCarouselNext}>{">"}</button>
                            </div>
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
                            <div class="carousel">
                                <button class="carousel__button previous" id="previous" onClick={handleCarouselPrevious}>{"<"}</button>
                                <div class="carousel__images" style={{transform:`translateX(${translateX}px)`}}>
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/4.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/2.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="" />
                                </div>
                                <button class="carousel__button next" id="next" onClick={handleCarouselNext}>{">"}</button>
                            </div>
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
                            <div class="carousel">
                                <button class="carousel__button previous" id="previous" onClick={handleCarouselPrevious}>{"<"}</button>
                                <div class="carousel__images" style={{transform:`translateX(${translateX}px)`}}>
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/4.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/2.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="" />
                                </div>
                                <button class="carousel__button next" id="next" onClick={handleCarouselNext}>{">"}</button>
                            </div>
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
                            <div class="carousel">
                                <button class="carousel__button previous" id="previous" onClick={handleCarouselPrevious}>{"<"}</button>
                                <div class="carousel__images" style={{transform:`translateX(${translateX}px)`}}>
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/4.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/2.jpg?resize=680%2C920&ssl=1" alt="" />
                                    <img src="https://i1.wp.com/konte.uix.store/wp-content/uploads/2018/04/1.jpg?resize=680%2C920&ssl=1" alt="" />
                                </div>
                                <button class="carousel__button next" id="next" onClick={handleCarouselNext}>{">"}</button>
                            </div>
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
            <Footer />
        </div >
    )
})


export default Products;