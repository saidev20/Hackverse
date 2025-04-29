import React, { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LandingPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin123') {
            alert('Login successful!');
            navigate('/admin-dashboard');
        } else {
            setLoginError('Invalid credentials, please try again.');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-left">
                <img src="/logo.png" alt="Logo" className="login-logo" />
                <h1>Welcome to</h1>
                <h2>Sahyadri Digital Campus</h2>
            </div>

            <div className="login-right">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="input-icon-group">
                        <FaEnvelope className="icon" />
                        <input
                            type="text"
                            placeholder="Login ID"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-icon-group">
                        <FaLock className="icon" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="checkbox-row">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>

                    {loginError && <p className="error-message">{loginError}</p>}

                    <button type="submit" className="login-btn">LOGIN</button>
                </form>
            </div>
        </div>
    );
};

export default LandingPage;
