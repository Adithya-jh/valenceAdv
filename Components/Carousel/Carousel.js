import { useState } from "react";

const Carousel = ({children}) => {

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

        <div class="product-card">
            <figure>
                <div class="carousel">
                    <button class="carousel__button previous" id="previous" onClick={handleCarouselPrevious}>{"<"}</button>
                    <div class="carousel__images" style={{transform: `translateX(${translateX}px)`}}>
                        {children}
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

    )
}



export default Carousel;