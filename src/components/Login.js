import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [tiktokLoginUrl, setTiktokLoginUrl] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/tiktok/auth`)
      .then(response => {
        console.log('Auth response:', response.data);
        if (response.data && response.data.url) {
          setTiktokLoginUrl(response.data.url);
        } else {
          console.error('TikTok auth URL is missing from the response');
        }
      })
      .catch(error => {
        console.error('Error fetching TikTok auth URL:', error);
        if (error.response) {
          console.error('Error response:', error.response.data);
        }
      });
  }, []);

  const handleTikTokLogin = () => {
    if (tiktokLoginUrl) {
      window.location.href = tiktokLoginUrl;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log('Login attempt with:', { username, password });
    // Here you would typically send these credentials to your server
    // For demonstration, we're just logging to console
  };

  return (
    <div className="login-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <input type="text" id="username" name="username" placeholder="Username" required />
        <input type="password" id="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      
      <div className="or-divider">OR</div>
      
      {tiktokLoginUrl && (
        <button onClick={handleTikTokLogin} className="tiktok-login-button">
          Login with TikTok
        </button>
      )}
    </div>
  );
};

export default Login;
