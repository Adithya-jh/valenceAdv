import Navbar from "./../Components/Navbar/Navbar"
import Footer from "./../Components/Footer/Footer"


const FAQ = () => {
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
            </div>
            <Footer />
        </div>
    )
}

export default FAQ;