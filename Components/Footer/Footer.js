import Link from 'next/link'


const Footer = () => {
    const date = new Date();

    return (
        <div className="footerSection">
            <div className="footerContainer">
                <div className="footerHeader">
                    <h1>Get your Brochure</h1>
                    <p>
                        Drop in your email address and check out all our composite consumables!
                    </p>
                </div>
                <div className="footerEmailSection">
                    <input placeholder="Enter your email address"></input>
                    <button>Download</button>
                </div>
                <div className="footerMain">
                    <div className="footerFlex left">
                        <Link href="/"><p>Valence Advanced Materials Private Limited</p></Link>
                    </div>
                    <div className="footerFlex">
                        <p>{/*<span><Link href="#">Privacy Policy</Link></span>*/}<span><Link href="/faq">FAQ's</Link></span><span><Link href="/contact">Contact Us</Link></span></p>
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