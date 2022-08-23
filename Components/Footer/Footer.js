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
                        <Link href="/"><p>© {date.getFullYear()} Valence All rights reserved</p></Link>
                    </div>
                    <div className="footerFlex">
                        <p><span><Link href="#">Privacy Policy</Link></span><span><Link href="/faq">FAQ's</Link></span><span><Link href="/contactus">Contact Us</Link></span></p>
                    </div>
                    <div className="footerFlex right">
                        <p><Link href="https://www.linkedin.com/in/valenceadvancedmaterials/"><i class="fa-brands fa-linkedin-in"></i></Link></p>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Footer;