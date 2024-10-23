import React from 'react';

const Register = () => {
    return (
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                {/* <div className="social-icons">
                    <a href="#" className="icon">
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
                    </a>
                </div> */}
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;
