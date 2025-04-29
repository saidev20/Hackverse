import React, { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
        <div className="landing-container">
            <header className="landing-header">
                <img 
                    src="institution-logo.png" 
                    alt="Institution Logo" 
                    className="institution-logo"
                />
            </header>
            <div className="hero-image">
                <img 
                    src="institution-photo.jpg" 
                    alt="Institution" 
                    className="hero-img"
                />
            </div>
            <div className="landing-content">
                <h1>Welcome to the [Institution Name] Timetable Management System</h1>
                <p>Streamline your academic scheduling with ease and efficiency.</p>

                <div className="login-section">
                    <h2>Admin Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        {loginError && <p className="error-message">{loginError}</p>}
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
