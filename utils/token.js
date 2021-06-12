const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;
module.exports = {
  generateToken: (token) => {
    return jwt.sign(
      {
        app: "Becod3r",
        type: "public",
      },
      token,
      {
        expiresIn: 2 * 60 * 60 * 100,
      }
    );
  },
  authToken: (userData) => {
    return jwt.sign(
      {
        user: {
          email: userData.email,
          role: userData.RoleId,
        },
      },
      secretKey,
      {
        expiresIn: "3h",
      }
    );
  },
};
