import React from 'react';
import "./Login.css"
const Login = () => {
    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="login">
                <h3>Please Login</h3>
                <form>
                    <input className="rounded-pill border border-danger px-4 py-2" type="email" name="email" id="" placeholder="Your Email : " /><br /><br />
                    <input className="rounded-pill border border-danger px-4 py-2" type="password" name="password" id="" placeholder="Your Password : " /><br />
                    <button class="button-82-pushable m-4" role="button">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">
                            Login
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;