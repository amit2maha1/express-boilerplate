const jwt = require("jsonwebtoken");

function sign(payload) {
  return new Promise((res, rej) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) return rej(error);
        return res(token);
      }
    );
  });
}

module.exports = {
  sign,
};
