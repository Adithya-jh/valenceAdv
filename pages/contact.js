import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Map from './../Components/Map/Map'

function contact() {
    return (
        <div className="contact-main">
            <Navbar />
            <div className="page-titles">
                <div className="entry-titles">
                    Contact Us

                </div>

                <div className="entry-subtitles">

                    <p>Namma Bengaluru not only has the best coffee in town but also the best composite consumables as well exclusively at Valence.<br></br>Call us, show up & see for yourself!</p>

                </div>
            </div>

            <Map />

            <div className='contactInformation'>
                <div className='contactMainContainer'>
                    <h1>Contact Information</h1>
                    <table className='contactMainTable'>
                        <tbody>
                            <tr>
                                <td valign="top" className='contactTableHeading mainAddress'><h4>BANGALORE OFFICE</h4></td>
                                <td valign="top">
                                    <table className='contactSubTable'>
                                        <tbody>
                                            <tr>
                                                <td className='contactTableSubHeading' valign="top"><h5>ADDRESS</h5></td>
                                                <td><p><a target="_blank" href={"https://www.google.com/maps/place/13%C2%B005'21.1%22N+77%C2%B036'11.3%22E/@13.0891867,77.6009378,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe8f8d15c48aa078c!8m2!3d13.0891867!4d77.6031265?hl=en"}>
                                                    Valence Advanced Materials Private Limited<br></br>
                                                    # 223, 3rd B Phase L/O, Shivanahalli (V), Yelahanka (H), Bangalore - 560 064, Karnataka, India<br></br>
                                                    CIN : U51909KA2020PTC132570
                                                </a>
                                                </p></td>
                                            </tr>
                                            <tr>
                                                <td className='contactTableSubHeading' valign="top"><h5>PHONE</h5></td>
                                                <td><p><a href="tel:+919353784714">+91 9353 78 4714</a><br></br>
                                                    <a href="tel:+919353067232">+91 9353 06 7232</a></p></td>
                                            </tr>
                                            <tr>
                                                <td className='contactTableSubHeading' valign="top"><h5>EMAIL</h5></td>
                                                <td><p><a href="mailto:enquiry@vamlindia.com">enquiry@vamlindia.com</a><br></br><a href="mailto:contact@vamlindia.comm">contact@vamlindia.com</a></p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td className='contactTableHeading'>
                                    <h4>SOCIAL MEDIA</h4>

                                </td>
                                <td>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><a target="_blank" href="https://www.linkedin.com/in/valenceadvancedmaterials/"><i class="fa-brands fa-linkedin-in"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>

                            </tr>
                        </tbody>
                    </table>
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

export default contact