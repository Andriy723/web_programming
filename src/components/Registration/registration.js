import React, { useState } from 'react';
import Bottom from '../Home/Bottom/bottom';
import Footer from '../Home/Footer/footer';
import { Link, useNavigate } from 'react-router-dom';

const Registration = ({ setIsAuthenticated, onRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isGoogleEmail = (inputEmail) => {
        const googleEmailPattern = /@gmail\.com$/;
        return googleEmailPattern.test(inputEmail);
    };

    const handleRegistration = () => {
        if (
            username.trim() !== '' &&
            email.trim().length >= 13 &&
            password.trim() !== '' &&
            password === confirmPassword &&
            isGoogleEmail(email)
        ) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            setIsAuthenticated(true);
            onRegister(email);
            navigate('/');
        } else {
            setError('Invalid registration details. Please check your inputs.');
        }
    };

    return (
        <div>
            <div className="registration_container">
                <h2 className="registration_header">Sign up</h2>
                <div>
                    <label className="username_registration">Username:</label>
                    <br />
                    <br />
                    <input
                        className="username_input_registration"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label className="email_registration">Email:</label>
                    <br />
                    <br />
                    <input
                        className="email_input_registration"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label className="password_registration">Password:</label>
                    <br />
                    <br />
                    <input
                        className="password_input_registration"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label className="password_confirmation_registration">Confirm Password:</label>
                    <br />
                    <br />
                    <input
                        className="password_confirmation_input_registration"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <br />
                <button onClick={handleRegistration} className="singup_button_registration">
                    Sign up
                </button>
                <p>
                    Have an account?{'  '}
                    <span className="login_button_registration">
            <Link to="/login">Login</Link>
          </span>
                </p>
            </div>
            <Bottom />
            <Footer />
        </div>
    );
};

export default Registration;
