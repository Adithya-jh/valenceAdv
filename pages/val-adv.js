import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";



const valAdv = () => {
    return (
        <div className="val-adv-section">
            <Navbar />
            <div className="val-adv-container">
                <div className="val-adv-header">
                    <div className="val-adv-header-item">
                        <h1>Valenced Advantage</h1>
                        <p>Quisque tortor nulla, sollicitudin quis venenatis et, tincidunt placerat eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="val-adv-body">
                <div className="val-adv-body-container">
                    <div className="val-adv-company">
                        <h1>Valanced Advantage</h1>
                        <div className="company-container">
                            <h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam
                            </h3>
                            <p>
                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit
                            </p>
                        </div>
                    </div>
                    <div className="val-adv-company">
                        <h1>Our Value</h1>
                        <div className="features-wrap">
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
                            </div>
                            <div className='about-us-features'>
                                <div className='about-us-features-container'>
                                    <img src='https://ik.imagekit.io/vn49p9jmnnv7g/konte/experience_rugtbNSuAi.svg'></img>
                                    <h3>16 Years of Experiences</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div className='about-us-features-container'>
                                    <img src='https://ik.imagekit.io/vn49p9jmnnv7g/konte/support_miiOGcuzx.svg'></img>
                                    <h3>16 Years of Experiences</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='getInTouchSection'>
                        <div className='getInTouchSectionContainer'>
                            <h1>Get In Touch</h1>
                            <div className='getInTouchBody'>
                                <div className='contact-input-pair'>
                                    <div className="floating-label-group">
                                        <input type="text" className="form-control" autoComplete="off" autoFocus required />
                                        <label className="floating-label">Name</label>
                                    </div>
                                    <div className="floating-label-group-space">
                                    </div>
                                    <div className="floating-label-group">
                                        <input type="password" className="form-control" autoComplete="off" required />
                                        <label className="floating-label">Email</label>
                                    </div>
                                </div>
                                <div className="floating-label-group">
                                    <input type="text" className="form-control" autoComplete="off" required />
                                    <label className="floating-label">Subject</label>
                                </div>
                                <div class="textAreaContactSection">
                                    <textarea name="textarea" id="textarea" placeholder="message"></textarea>
                                    <label for="textarea">Message</label>
                                </div>
                                <div className='floating-label-group-button'>
                                    <button>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default valAdv;