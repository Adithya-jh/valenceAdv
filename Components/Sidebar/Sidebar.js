import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Sidebar = () => {

    const [sideBar, setSideBar] = useState(false);
    const [signUp, setSignUp] = useState(false);

    return (
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
        </div>
    )
}



export default Sidebar;