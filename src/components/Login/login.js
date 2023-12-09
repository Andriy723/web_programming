import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Bottom from "../Home/Bottom/bottom";
import Footer from "../Home/Footer/footer";

const Login = ({ setIsAuthenticated, setRegisteredEmail, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (storedEmail && email.trim() === storedEmail.trim() && password === storedPassword) {
            localStorage.setItem('lastLoggedOutEmail', storedEmail);
            localStorage.setItem('lastLoginTime', Date.now().toString());

            setIsAuthenticated(true);
            onLogin(email);

            navigate('/');

        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div>
            <div className="login_container">
                <h2 className="login_header">Login</h2>
                <div>
                    <label className="email_login">Email:</label>
                    <br/>
                    <br/>
                    <input
                        className="email_input"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br/>
                <div>
                    <label className="password_login">Password:</label>
                    <br/>
                    <br/>
                    <input
                        className="password_input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br/>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <br/>
                <button onClick={handleLogin} className="login_button">Login</button>
                <p>
                    Don't have an account?{' '}
                    <span onClick={() => setRegisteredEmail(email)} className="singup_button">
                        <Link to="/register">
                            Sign up
                        </Link>
                    </span>
                </p>
            </div>
            <Bottom />
            <Footer />
        </div>
    );
};

export default Login;
