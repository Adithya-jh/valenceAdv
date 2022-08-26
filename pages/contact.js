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

                    <p>Suspendisse eget mi eget felis egestas tristique at sit amet libero. Donec lacinia dapibus ante sed fringilla. Sed est mauris, maximus eu varius id, tincidunt vitae mauris.</p>

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
                                                <td><p>9606 North MoPac Expressway Suite 700 Austin, TX 78759</p></td>
                                            </tr>
                                            <tr>
                                                <td className='contactTableSubHeading'><h5>PHONE</h5></td>
                                                <td><p>+91 960678759</p></td>
                                            </tr>
                                            <tr>
                                                <td className='contactTableSubHeading'><h5>EMAIL</h5></td>
                                                <td><p>valence@gmail.com</p></td>
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
                                                <td><i class="fa-brands fa-linkedin-in"></i></td>
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
                                <div className="floating-label-group">
                                    <textarea cols="50" type="text" autoComplete="off" placeholder="Message" required />
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