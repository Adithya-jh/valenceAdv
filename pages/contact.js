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
            <h2 className="contact-info">Contact Information</h2>
            <div className="con-addr">
                <div className="con-addr1 con ">BANGALORE OFFICE</div>
                <div className="con-addr2-main con cond">
                    <div className="con-addr2">ADDRESS</div>
                    <div className="con-addr2">PHONE</div>
                    <div className="con-addr2">EMAIL</div>
                </div>
                <div className="con-addr3-main con cond">
                    <div className="con-addr3">9606 North MoPac Expressway Suite 700 Austin, TX 78759</div>
                    <div className="con-addr3">+1 248-785-8545</div>
                    <div className="con-addr3">vamlindia@gmail.com</div>
                </div>
            </div>

            {/* <div className="">

            </div> */}s

        </div>
        <Footer/>
    </div>
 
  )
}

export default contact