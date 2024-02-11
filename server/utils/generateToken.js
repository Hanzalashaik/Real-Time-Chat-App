import jwt from 'jsonwebtoken';
import config from 'config';

// Utility function to generate JWT token and set it in a cookie
const generateTokenAndSetCookie = (userId, res) => {
  // Assuming you have a JWT_SECRET in your config
  const token = jwt.sign({ userId: userId }, config.get('JWT_TOKEN'), {
    expiresIn: '1d', // Token expires in 1 day
  });

  // Set token in a cookie
  // Secure: true, should be used in production when using HTTPS
  // SameSite: 'None' is needed if your frontend and backend are on different domains
  res.cookie('jwt', token, {
    httpOnly: true, // The cookie is not accessible via JavaScript (helps prevent XSS attacks)
    sameSite: 'Lax', // Strict or Lax recommended for CSRF protection
    maxAge: 24 * 60 * 60 * 1000, // Cookie expiration match token expiration: 24 hours
  });

  console.log(`Token generated and cookie set for user ID: ${userId}`);
  return token;
};

export default generateTokenAndSetCookie;