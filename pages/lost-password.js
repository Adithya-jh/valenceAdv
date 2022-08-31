import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const lostPassword = () => {
    return (
        <div className="forgotPassword">
            <Navbar />
            <div className="forgotPasswordContainer">
                <h1>Lost password</h1>
                <p>
                    Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
                </p>
                <div className="floating-label-group">
                    <input type="text" id="username" className="form-control" autoComplete="off" autoFocus required />
                    <label className="floating-label">Username or email</label>
                </div>
                <a>Reset Password</a>
            </div>
            <Footer />
        </div>
    )
}



export default lostPassword;