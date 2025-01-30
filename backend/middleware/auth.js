import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: "Not authorized login first" });
  }
  try {
    //this middleware basically take the token and convert it to userId
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized login first" });
  }
};

export default authMiddleware;
