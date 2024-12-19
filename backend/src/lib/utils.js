import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // Imposible acceder con Js
    sameSite: "strict", // Protege contra ataques CrossSite
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};