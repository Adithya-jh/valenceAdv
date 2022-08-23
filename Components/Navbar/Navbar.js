import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";


const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [isActive, setIsActive] = useState(false)
    const [sideBar, setSideBar] = useState(false);
    const [signUp, setSignUp] = useState(false);
    



    return (
        <>
            <div>
            <OutsideClickHandler onOutsideClick={() => { setSideBar(false); setSignUp(false) }}>
                <div id={sideBar && "mySidenav"} class="sidenav">
                    
                        <div className="signInBar">
                            <div className="signInBarContainer">
                                <div className="signInHeader">
                                    {signUp ? <p>Sign up</p>:<p>Sign in</p>}
                                    <i class="fa-solid fa-xmark" onClick={() => { setSideBar(false) }}></i>
                                </div>
                                {!signUp && <div>
                                    <div className="signInInput">
                                        <div>
                                            <div class="floating-label-group">
                                                <input type="text" id="username" class="form-control" autocomplete="off" autofocus required />
                                                <label class="floating-label">Username</label>
                                            </div>
                                            <div class="floating-label-group">
                                                <input type="password" id="password" class="form-control" autocomplete="off" required />
                                                <label class="floating-label">Password</label>
                                            </div>
                                        </div>
                                        <div className="rememberMe">
                                            <input type="checkbox"></input>
                                            <label>Remember me</label>
                                        </div>

                                        <button className="signInBtn">SIGN IN</button>
                                        <button className="signUpBtn" onClick={()=>{setSignUp(true)}}>CREATE AN ACCOUNT</button>
                                    </div>
                                    <div className="lostPass">
                                        <a><div><span>LOST YOUR PASSWORD ?</span></div></a>
                                    </div>
                                </div>}
                                {signUp && <div>
                                    <div className="signInInput">
                                        <div>
                                            <div class="floating-label-group">
                                                <input type="text" id="username" class="form-control" autocomplete="off" autofocus required />
                                                <label class="floating-label">Username</label>
                                            </div>
                                            <div class="floating-label-group">
                                                <input type="password" id="password" class="form-control" autocomplete="off" required />
                                                <label class="floating-label">Password</label>
                                            </div>
                                        </div>
                                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.

                                        </p>

                                        <button className="signInBtn">SIGN UP</button>
                                    </div>
                                    <div className="lostPass" onClick={()=>{setSignUp(false)}}>
                                        <a><div><span>ALREADY HAS AN ACCOUNT</span></div></a>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    
                </div>
                </OutsideClickHandler>
                <div id="mainNavbar">
                    <div className="navbar">
                        <div className="navbarContainer">
                            <div className="navbarComponent left">
                                <div className="openClose" onClick={() => { setIsActive(!isActive) }} >
                                    {isActive ? <i class="fa-solid fa-xmark" ></i> : <i class="fa-solid fa-bars" ></i>}
                                </div>

                                <span className="navbarItems">
                                    <ul>
                                        <li><a className="underlineHover" href="/">Home</a></li>
                                        <li><a className="underlineHover" href="#">About Us</a></li>
                                        <li><a className="underlineHover" href="#">Products</a></li>
                                        <li><a className="underlineHover" href="#">Services</a></li>
                                        <li><a className="underlineHover" href="/contact">Contact Us</a></li>
                                    </ul>
                                </span>
                            </div>
                            <h1>VALENCE</h1>
                            <div className="navbarComponent right">
                                <ul>
                                    <span className="navbarItems">
                                        <li onClick={() => { setSideBar(true) }}><span className="underlineHover">Sign in</span></li>
                                        <li className="searchBar">
                                            {toggle ?
                                                <OutsideClickHandler onOutsideClick={()=>{setToggle(false)}}>
                                                    <input placeholder="Search" type="text"></input>
                                                </OutsideClickHandler> : 
                                                <i className="fa-solid fa-magnifying-glass" onClick={()=>{setToggle(true)}}></i>}
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
                        <div className="mobileNavbar" id={isActive && "mobileNavbarActive"}>
                            <div className="mNavbarContainer">
                                <ul>
                                    <li className="searchBar">
                                        <input placeholder="Search" type="text"></input>
                                    </li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="#">Home</a></li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="#">About Us</a></li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="#">Products</a></li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="#">Services</a></li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="/contact">Contact Us</a></li>
                                    <li onClick={() => { setIsActive(!isActive); setSideBar(true)}}><a className="underlineHover" href="#">Sign in</a></li>
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
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar;