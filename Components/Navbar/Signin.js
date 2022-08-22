const Signin = () => {
    return (
        <div className="signInBar">
                            <div className="signInBarContainer">
                                <div className="signInHeader">
                                    <p>Sign in</p>
                                    <i class="fa-solid fa-xmark" onClick={() => { setSideBar(false) }}></i>
                                </div>
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
                                    <button className="signUpBtn">CREATE AN ACCOUNT</button>
                                </div>
                                <div className="lostPass">
                                    <a><div><span>LOST YOUR PASSWORD ?</span></div></a>
                                </div>
                            </div>
                        </div>
    )
}

export default Signin;