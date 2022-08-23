import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Map from './../Components/Map/Map'

function contact() {
  return (
    <div className="contact-main">
        <Navbar/>
        <div className="page-titles">
            <div className="entry-titles">
                Contact Us
                
            </div>

            <div className="entry-subtitles">
                
               <span className="upper-text-con">Lorem Ipsum, sometimes referred to as 'lipsum',</span> <br/>
                <span className="inner-text-con"> the placeholder text used in design when creating content. </span>

            </div> 
        </div>
        <Map/>

        <div className="con-info">
            <h2>Contact Information</h2>
            <div className="con-addr"></div>
        </div>
        <Footer/>
    </div>
 
  )
}

export default contact