import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";


const Navbar = () => {

    const [toggle, setToggle] = useState();
    const [opnenClose, setOpenClose] = useState(false)
    function openToggle() {
        setToggle(true)
    }
    function closeToggle() {
        setToggle(false)
    }


    return (
        <div className="navbar">
            <div className="navbarContainer">
                <div className="navbarComponent left">
                    <div className="openClose">
                        <i class="fa-solid fa-bars"></i>
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
                            <li><a className="underlineHover" href="#">Sign in</a></li>
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
        </div>
    )
}


export default Navbar;