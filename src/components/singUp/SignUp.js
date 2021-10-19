import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './SingUp.css'
const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const getEmail = (e) => {
        const email = e.target.value;
        setEmail(email)

    }
    const getPassword = (e) => {
        const password = e.target.value;
        setPassword(password)

    }
    const { signInWithGoogle, signUpwithEmailAndPassword, user } = useAuth()
    const handleSubmit = e => {
        e.preventDefault();
        signUpwithEmailAndPassword(email, password);

    }
    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="login">
                <h3>Please Sing up</h3>
                <form onSubmit={handleSubmit}>
                    <input className="rounded-pill border border-danger px-4 py-2" type="text" name="email" id="" placeholder="Your Name : " /><br /><br />
                    <input onBlur={getEmail} className="rounded-pill border border-danger px-4 py-2" type="email" name="email" id="" placeholder="Your Email : " /><br /><br />
                    <input onBlur={getPassword} className="rounded-pill border border-danger px-4 py-2" type="password" name="password" id="" placeholder="Your Password : " /><br />
                    <button type='submit' className="button-82-pushable m-4">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">
                            Sing Up
                        </span>
                    </button> <br />
                    ____________or___________ <br />
                    <button className="btn btn-primary" onClick={signInWithGoogle}>Google Sing In </button> <br /><br />
                    <Link to="/login">Already Have A Account?</Link>
                </form>
            </div>
        </div >
    );
};

export default SignUp;