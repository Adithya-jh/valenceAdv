import { useState } from "react";

const MyCarousel = ({children}) => {

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
                    {/*<button class="carousel__button previous" id="previous" onClick={handleCarouselPrevious}>{"<"}</button>*/}
                    {/*style={{transform: `translateX(${translateX}px)`}*/}
                    <div class="carousel__images" >
                        {children}
                    </div>
                    {/*<button class="carousel__button next" id="next" onClick={handleCarouselNext}>{">"}</button>*/}
                </div>
            </figure>
            <section className="product-card-space">
            </section>
            <section class="details">
                <div class="min-details">
                    <h1>VAL VAC TUBE MT</h1>
                    <h2>Self-Releasing Vacuum Bagging Film</h2>
                    <p>Medium Temperature</p>
                </div>
                <a href="/products/product1" class="productToCart">View Details</a>
            </section>
        </div>

    )
}



export default MyCarousel;