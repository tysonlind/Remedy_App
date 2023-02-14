import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
        <br />
        <div className="login">
            <h1>Login</h1>
            <div className="login-container">
                <div className="top">
                    <i className='fab fa-google'></i>
                    <i className='fab fa-facebook-square'></i>
                    <i className='fab fa-linkedin'></i>
                    <i className='fab fa-twitter-square'></i>
                    <i className='fab fa-apple'></i>
                </div>
                <p className="divider"><span>Or</span></p>
                <form action="">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" placeholder='Enter your email' name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter your password' name="password" id="password" />
                    <div className="rememberMe">
                        <input type="checkbox" checked='checked' name="" id="" />
                        <p>Remember Me</p>
                    </div>
                    <button>Log In</button>
                    </form>
                    <div className="bottom">
                        <p>Forget your password?</p>
                        <Link to="/">Reset Password</Link>
                        <p className='createAccount'><Link to="/">Create Account</Link></p>
                    </div>
            </div>
        </div>

    </div>
  )
}
