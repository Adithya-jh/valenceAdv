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
                        <h1>FAQ</h1>
                        <p>Aenean commodo dictum odio sit amet cursus. Integer id nunc sit amet ex pharetra aliquet. Duis metus magna, feugiat vel ullamcorper ac, commodo at velit.</p>
                    </div>
                </div>
                <div className="faqBody">
                    <div className="faqBodyContainer">
                        <span className="dashed"></span>
                        <div className="faqBodySpacing">
                            <h1>Shopping</h1>

                            <div className="faqBodyContent">
                                <div className="faqBodyHeader">
                                    <h3 onClick={() => { setShopping({...shopping, questionOne:true })}}>
                                        Aenean commodo dictum odio sit amet cursus. Inteet. Duis metus magna, feugiat vel ullamcorper ac?
                                    </h3>
                                    {
                                    shopping.questionOne &&
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        ><p>
                                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                            </p>
                                        </motion.div>}
                                </div>
                                {shopping.questionOne ? <i class="fa-solid fa-xmark" onClick={() => { setShopping({...shopping, questionOne:false }) }}></i> : <i></i>}
                            </div>

                            <div className="faqBodyContent">
                                <div className="faqBodyHeader">
                                    <h3 onClick={() => { setShopping({...shopping, questionTwo:true })}}>
                                        Aenean commodo dictum odio sit amet cursus. Inteet. Duis metus magna, feugiat vel ullamcorper ac?
                                    </h3>
                                    {shopping.questionTwo &&
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        ><p>
                                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                            </p>
                                        </motion.div>}
                                </div>
                                {shopping.questionTwo ? <i class="fa-solid fa-xmark" onClick={() => { setShopping({...shopping, questionTwo:false }) }}></i> : <i></i>}
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