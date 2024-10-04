const axios = require('axios');
const querystring = require('querystring');

const TIKTOK_CLIENT_KEY = process.env.TIKTOK_CLIENT_KEY;
const TIKTOK_CLIENT_SECRET = process.env.TIKTOK_CLIENT_SECRET;
const REDIRECT_URI = process.env.TIKTOK_REDIRECT_URI;

exports.getAuthUrl = (req, res) => {
  try {
    const TIKTOK_CLIENT_KEY = process.env.TIKTOK_CLIENT_KEY;
    const TIKTOK_REDIRECT_URI = process.env.TIKTOK_REDIRECT_URI;

    console.log('TIKTOK_CLIENT_KEY:', TIKTOK_CLIENT_KEY);
    console.log('TIKTOK_REDIRECT_URI:', TIKTOK_REDIRECT_URI);

    if (!TIKTOK_CLIENT_KEY || !TIKTOK_REDIRECT_URI) {
      throw new Error('TikTok client key or redirect URI is not set');
    }

    const authUrl = `https://www.tiktok.com/auth/authorize/?${querystring.stringify({
      client_key: TIKTOK_CLIENT_KEY,
      scope: 'user.info.basic,video.list',
      response_type: 'code',
      redirect_uri: TIKTOK_REDIRECT_URI,
      state: req.csrfToken()
    })}`;

    console.log('Generated Auth URL:', authUrl);
    res.json({ url: authUrl, csrfToken: req.csrfToken() });
  } catch (error) {
    console.error('Error in getAuthUrl:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.handleCallback = async (req, res) => {
  console.log('Callback received:', req.query); // Add this line
  const { code, state } = req.query;

  // Verify the CSRF token
  if (state !== req.csrfToken()) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post('https://open-api.tiktok.com/oauth/access_token/', null, {
      params: {
        client_key: TIKTOK_CLIENT_KEY,
        client_secret: TIKTOK_CLIENT_SECRET,
        code: code,
        grant_type: 'authorization_code'
      }
    });

    // Handle the response and send it back to the client
    res.json(tokenResponse.data);
  } catch (error) {
    console.error('Error in TikTok callback:', error);
    res.status(500).json({ error: 'Failed to exchange code for token' });
  }
};