import Link from 'next/link'


const Footer = () => {
    const date = new Date();
    
    return(
        <div className="footerSection">
            <div className="footerContainer">
                <div className="footerHeader">
                    <h1>Join our list</h1>
                    <p>
                        Signup to be the first to hear about exclusive deals, special offers and upcoming collections
                    </p>
                </div>
                <div className="footerEmailSection">
                    <input placeholder="Enter your email address"></input>
                    <button>Download</button>
                </div>
                <div className="footerMain">
                    <div className="footerFlex left">
                        <p>© {date.getFullYear()} Valence All rights reserved</p>
                    </div>
                    <div className="footerFlex">
                        <p><span>Privacy Policy</span><Link href="/faq"><a><span>FAQ's</span></a></Link><span>Contact Us</span></p>
                    </div>
                    <div className="footerFlex right">
                        <p><i class="fa-brands fa-linkedin-in"></i></p>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Footer;