import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Link from 'next/link'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [isActive, setIsActive] = useState(false)
    const [sideBar, setSideBar] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [language, setLanguage] = useState("EN")




    return (
        <>
            <div>
                <OutsideClickHandler onOutsideClick={() => { setSideBar(false); setSignUp(false) }}>
                    <div id={sideBar && "mySidenav"} className="sidenav">

                        <div className="signInBar">
                            <div className="signInBarContainer">
                                <div className="signInHeader">
                                    {signUp ? <p>Sign up</p> : <p>Sign in</p>}
                                    <div className="closeButton" onClick={() => { setSideBar(false) }}><p>Close</p> <i className="fa-solid fa-xmark" ></i></div>
                                </div>
                                {!signUp && <div>
                                    <div className="signInInput">
                                        <div>
                                            <div className="floating-label-group">
                                                <input type="text" id="username" className="form-control" autoComplete="off" autoFocus required />
                                                <label className="floating-label">Username</label>
                                            </div>
                                            <div className="floating-label-group">
                                                <input type="password" id="password" className="form-control" autoComplete="off" required />
                                                <label className="floating-label">Password</label>
                                            </div>
                                        </div>
                                        <div className="rememberMe">
                                            <input type="checkbox"></input>
                                            <label>Remember me</label>
                                        </div>

                                        <a className="signInBtn">SIGN IN</a>
                                        <a className="signUpBtn" onClick={() => { setSignUp(true) }}>CREATE AN ACCOUNT</a>
                                    </div>
                                    <div className="lostPass">
                                        <a href="/lost-password"><div><span>LOST YOUR PASSWORD ?</span></div></a>
                                    </div>
                                </div>}
                                {signUp && <div>
                                    <div className="signInInput">
                                        <div>
                                            <div className="floating-label-group">
                                                <input type="text" id="username" className="form-control" autoComplete="off" autoFocus required />
                                                <label className="floating-label">Email</label>
                                            </div>
                                            <div className="floating-label-group">
                                                <input type="password" id="password" className="form-control" autoComplete="off" required />
                                                <label className="floating-label">Password</label>
                                            </div>
                                        </div>
                                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.

                                        </p>

                                        <a className="signInBtn">SIGN UP</a>
                                    </div>
                                    <div className="lostPass" onClick={() => { setSignUp(false) }}>
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
                                    {isActive ? <i className="fa-solid fa-xmark" ></i> : <i className="fa-solid fa-bars" ></i>}
                                </div>

                                <span className="navbarItems">
                                    <ul>
                                        <li><a className="underlineHover" href="/">Home</a></li>
                                        <li><a className="underlineHover" href="/about-us">About Us</a></li>
                                        <li className="mainLiHover">
                                            <div class="dropdown">
                                                <Link href="/products?temp=everything"><button class="dropbtn"><span className="underlineHover">Products</span></button></Link>
                                                <div class="dropdown-content product">
                                                    <a href="/products?temp=_120"><span>Vacuum Bagging Films</span></a>
                                                    <a href="/products?temp=_140_180"><span>Self-Releasing Vacuum Bagging Films</span></a>
                                                    <a href="/products?temp=_190_204"><span>Release Films</span></a>
                                                    <a href="/products?temp=_204_260"><span>Peel Ply</span></a>
                                                    <a href="/products?temp=resin_vacuum"><span>Breathers & Bleeders</span></a>
                                                    <a href="/products?temp=resin_vacuum"><span>Pressure Sensitive Tapes</span></a>
                                                    <a href="/products?temp=resin_vacuum"><span>Vacuum Valves</span></a>
                                                    <a href="/products?temp=resin_vacuum"><span>Quick Connectors</span></a>
                                                    <a href="/products?temp=resin_vacuum"><span>Vacuum Hoses</span></a>
                                                    <a href="/products?temp=resin_vacuum"><span>Leak Detectors</span></a>
                                                </div>
                                            </div>
                                        </li>
                                        {/*<li className="mainLiHover">
                                            <div class="dropdown">
                                                <button class="dropbtn"><span className="underlineHover">Services</span></button>
                                                <div class="dropdown-content">
                                                    <a href="/val-adv"><span>Val Adv</span></a>
                                                </div>
                                            </div>
                                </li>*/}
                                        <li>
                                            <div className="val-ad-Container">
                                                <a className="underlineHover" href="/val-adv">
                                                    <span>VAL AD</span>
                                                    <p>The Valence Advantage</p>
                                                </a>
                                            </div>
                                        </li>
                                        <li><a className="underlineHover" href="/contact">Contact Us</a></li>
                                    </ul>
                                </span>
                            </div>
                            <Link href="/"><img src={"https://firebasestorage.googleapis.com/v0/b/valence-am.appspot.com/o/Asserts%2Flogo.png?alt=media&token=e093bed7-8127-4c0b-a60a-027546c6f659"} /></Link>
                            <div className="navbarComponent right">
                                <ul>
                                    <span className="navbarItems" style={{ paddingRight: "25px" }}>
                                        <li onClick={() => { setSideBar(true) }}><span className="underlineHover">Sign in</span></li>
                                        <li className="searchBar">
                                            {toggle ?
                                                <OutsideClickHandler onOutsideClick={() => { setToggle(false) }}>
                                                    <div className="openSearchBar" onClick={() => { setToggle(true) }}>
                                                        <i className="fa-solid fa-magnifying-glass" ></i>
                                                        <input placeholder="Search" type="text"></input>
                                                    </div>
                                                </OutsideClickHandler> :
                                                <i className="fa-solid fa-magnifying-glass" onClick={() => { setToggle(true) }}></i>}
                                        </li>
                                        {/*<li>
                                            <label>Language</label>
                                        </li>

                                        <li className="languageHover">

                                            <div class="languageDropdown">
                                                <button class="languageDropbtn"><span className="underlineHover">{language} </span><i class="fa-solid fa-angle-down"></i></button>
                                                <div class="dropdownContent">
                                                    <a onClick={() => { setLanguage("EN") }}>EN</a>
                                                    <a onClick={() => { setLanguage("AR") }}>AR</a>
                                                </div>
                                            </div>
                                            </li>*/}

                                        <li className="cart">

                                            <a href="#">
                                                <i class="fa-solid fa-basket-shopping"></i>
                                            </a>
                                            <p className="cartNum">
                                                <span className="badge">0</span>
                                            </p>
                                        </li>
                                    </span>


                                </ul>
                            </div>
                        </div>
                        <div className="mobileNavbar" id={isActive && "mobileNavbarActive"}>
                            <div className="mNavbarContainer">
                                <ul>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="/">Home</a></li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="/about-us">About Us</a></li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="/products?temp=everything">Products</a></li>
                                    <li onClick={() => { setIsActive(!isActive) }}>
                                            <div className="val-ad-Container">
                                                <a href="/val-adv">
                                                    <span>VAL AD</span>
                                                    <p>The Valence Advantage</p>
                                                </a>
                                            </div>
                                    </li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="/contact">Contact Us</a></li>
                                    <li onClick={() => { setIsActive(!isActive); setSideBar(true) }}><a className="underlineHover" href="#">Sign in</a></li>
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