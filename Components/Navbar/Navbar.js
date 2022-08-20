import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";


const Navbar = () => {

    const [toggle, setToggle] = useState();
    function openToggle() {
        setToggle(true)
    }
    function closeToggle() {
        setToggle(false)
    }
    const [isActive, setIsActive] = useState(false)
    console.log(isActive)
    


    return (
        <div className="navbar">
            <div className="navbarContainer">
                <div className="navbarComponent left">
                    <div className="openClose" onClick={()=>{setIsActive(!isActive)}} >
                        {isActive ? <i class="fa-solid fa-xmark" ></i> : <i class="fa-solid fa-bars" ></i>}
                    </div>

                    <span className="navbarItems">
                        <ul>
                            <li><a className="underlineHover" href="#">Home</a></li>
                            <li><a className="underlineHover" href="#">About Us</a></li>
                            <li><a className="underlineHover" href="#">Products</a></li>
                            <li><a className="underlineHover" href="#">Services</a></li>
                            <li><a className="underlineHover" href="#">Contact Us</a></li>
                        </ul>
                    </span>
                </div>
                <h1>VALENCE</h1>
                <div className="navbarComponent right">
                    <ul>
                        <span className="navbarItems">
                            <li><span className="underlineHover">Sign in</span></li>
                            <li className="searchBar">
                                {toggle ?
                                    <OutsideClickHandler onOutsideClick={closeToggle}><input placeholder="Search" type="text"></input></OutsideClickHandler> : <i className="fa-solid fa-magnifying-glass" onClick={openToggle}></i>}
                            </li>

                            <li>
                                <label>LN</label>
                                <select id="languages" name="languages">
                                    <option value="english">EN</option>
                                    <option value="arabic">AR</option>
                                </select>
                            </li>
                        </span>
                        <li className="cart">

                            <a href="#">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </a>
                            <p className="cartNum"><span>0</span></p>
                        </li>


                    </ul>
                </div>
            </div>
            <div className={isActive ? "mobileNavbar active" : "mobileNavbar"}>
                <div className="mNavbarContainer">
                
                    <ul>
                        <li className="searchBar">
                            <input placeholder="Search" type="text"></input>
                        </li>
                        <li onClick={()=>{setIsActive(!isActive)}}><a className="underlineHover" href="#">Home</a></li>
                        <li onClick={()=>{setIsActive(!isActive)}}><a className="underlineHover" href="#">About Us</a></li>
                        <li onClick={()=>{setIsActive(!isActive)}}><a className="underlineHover" href="#">Products</a></li>
                        <li onClick={()=>{setIsActive(!isActive)}}><a className="underlineHover" href="#">Services</a></li>
                        <li onClick={()=>{setIsActive(!isActive)}}><a className="underlineHover" href="#">Contact Us</a></li>
                        <li onClick={()=>{setIsActive(!isActive)}}><a className="underlineHover" href="#">Sign in</a></li>
                        <li>
                            <label>LN</label>
                            <select id="languages" name="languages">
                                <option value="english">EN</option>
                                <option value="arabic">AR</option>
                            </select>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className="signInBar">
                <div className="signInBarContainer">
                    <div className="signInHeader">
                        <p>Sign in</p>
                        <i class="fa-solid fa-xmark" ></i>
                    </div>
                    <div className="signInInput">
                        <input placeholder="Username"></input>
                        <input placeholder="Password"></input>
                        <input type="chekbox"></input>
                        <label>Remember me</label>
                        <button>SIGN IN</button>
                        <button>CREATE AN ACCOUNT</button>
                    </div>
                    <a><p>LOST YOUR PASSWORD</p></a>
                </div>
                
            </div>
        </div>
    )
}


export default Navbar;