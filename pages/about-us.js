import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Map from '../Components/Map/Map'

function aboutUs() {
    return (
        <div className="about-us-main">
            <Navbar />
            <div className="page-titles">
                <div className="entry-titles">
                    About Us

                </div>

                <div className="entry-subtitles">

                    <p>Namma Bengaluru not only has the best coffee in town but also the best composite consumables as well exclusively at Valence.<br></br>Call us, show up & see for yourself!</p>

                </div>
            </div>

            <div className='about-us-image'>

            </div>

            <div className='aboutUsInformation'>
                <div className="aboutUsMainContainer">
                    <h1>The Company</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h3>
                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur aut odit aut fugit
                    </p>

                    <div className='aboutUsMainBody'>
                        <div className='aboutUsVM'>
                            <h4>Our Mission</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                                laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                                dicta sunt explicabo.
                            </p>
                        </div>
                        <div className='aboutUsVM'>
                            <h4>Our Vission</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                                laborum. Sed ut perspiciatis unde omnis iste natus.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='about-us-features'>
                <div className='about-us-features-container'>
                    <img src='https://ik.imagekit.io/vn49p9jmnnv7g/konte/customer_icte55gQc2xJ.svg'></img>
                    <h3>40,000+ Happy Customer</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='about-us-features-container'>
                    <img src='https://ik.imagekit.io/vn49p9jmnnv7g/konte/awards_zibC7AE_DB.svg'></img>
                    <h3>12 Awards Won</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className='about-us-features-container'>
                    <img src='https://ik.imagekit.io/vn49p9jmnnv7g/konte/experience_rugtbNSuAi.svg'></img>
                    <h3>16 Years of Experiences</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                         nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default aboutUs;