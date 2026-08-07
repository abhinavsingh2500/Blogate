import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    const token = req.headers.authorization || req.headers.token;
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Token missing.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.json({ success: false, message: 'Invalid or expired token' });
    }
};

export default auth;
  
