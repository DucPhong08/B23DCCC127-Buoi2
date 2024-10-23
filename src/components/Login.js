import React from 'react';

const Login = () => {
    return (
        <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <div className="social-icons">
                    {/* <a href="#" className="icon">
                        <i className="fa-brands fa-google-plus-g"></i>
                    </a>
                    <a href="#" className="icon">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="icon">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#" className="icon">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a> */}
                </div>
                <span>or use your email password</span>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                {/* <a href="#">Forget Your Password?</a> */}
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Login;
