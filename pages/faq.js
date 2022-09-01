import Navbar from "./../Components/Navbar/Navbar"
import Footer from "./../Components/Footer/Footer"
import { useState } from "react"
import { motion } from "framer-motion";


const FAQ = () => {

    const [shopping, setShopping] = useState({
        questionOne: false,
        questionTwo: false,
        questionThree: true,
    });


    return (
        <div className="faqPage">
            <Navbar />
            <div className="faqContainer">
                <div className="faqHeader">
                    <div className="faqHeaderItem">
                        <h1>Frequently Asked Questions</h1>
                        <p>Ask more to get more. However, we have covered all the possible questions about working with Valence that will pop in your mind. Take a look!</p>
                    </div>
                </div>
                <div className="faqBody">
                    <div className="faqBodyContainer">
                        <span className="dashed"></span>
                        <div className="faqBodySpacing">
                            <h1>Shopping</h1>

                            <div className="faqBodyContent">
                                <div className="faqBodyHeader">
                                    <h3 onClick={() => { setShopping({ ...shopping, questionOne: true }) }}>
                                        Aenean commodo dictum odio sit amet cursus. Inteet. Duis metus magna, feugiat vel ullamcorper ac?
                                    </h3>
                                    {
                                        <div className={shopping.questionOne ? "slider" : "slider closed"} id={!shopping.questionOne && "sliderActive"} >
                                            <p >
                                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                            </p>
                                        </div>
                                    }
                                </div>
                                {shopping.questionOne ? <i className="fa-solid fa-xmark" onClick={() => { setShopping({ ...shopping, questionOne: false }) }}></i> : <i></i>}
                            </div>

                            <div className="faqBodyContent">
                                <div className="faqBodyHeader">
                                    <h3 onClick={() => { setShopping({ ...shopping, questionTwo: true }) }}>
                                        Aenean commodo dictum odio sit amet cursus. Inteet. Duis metus magna, feugiat vel ullamcorper ac?
                                    </h3>
                                    {
                                        <div className={shopping.questionTwo ? "slider" : "slider closed"} id={!shopping.questionTwo && "sliderActive"} >
                                            <p >
                                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                            </p>
                                        </div>
                                    }
                                </div>
                                {shopping.questionTwo ? <i className="fa-solid fa-xmark" onClick={() => { setShopping({ ...shopping, questionTwo: false }) }}></i> : <i></i>}
                            </div>


                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FAQ;