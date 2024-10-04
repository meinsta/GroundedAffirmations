// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// function TikTokCallback() {
//   const [error, setError] = useState(null);
//   const [accessToken, setAccessToken] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleCallback = async () => {
//       const urlParams = new URLSearchParams(location.search);
//       const code = urlParams.get('code');
//       const error = urlParams.get('error');

//       if (error) {
//         setError(`Authorization failed: ${error}`);
//         return;
//       }

//       if (!code) {
//         setError('No authorization code found in the URL');
//         return;
//       }

//       try {
//         // Send the code to your backend
//         const response = await fetch('https://5dc3-2603-8000-a700-99de-b903-f766-e730-979c.ngrok-free.app/tiktok/callback', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ code }),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to process authorization');
//         }

//         const data = await response.json();
//         setAccessToken(data.access_token);

//         // Redirect to a protected route or dashboard
//         navigate('/dashboard');
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     handleCallback();
//   }, [location, navigate]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!accessToken) {
//     return <div>Processing authorization...</div>;
//   }

//   return <div>Authorization successful! Redirecting...</div>;
// }

// export default TikTokCallback;