const jwt = require('jsonwebtoken')

/**
 * generate jwt token
 * @param {Object} payload
 * @param {Object} options
 */
const generateAccessToken = (payload, options = {}) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    Object.assign(
      {
        algorithm: process.env.JWT_ALGORITHM,
        notBefore: process.env.JWT_NOTBEFORE,
        expiresIn: process.env.JWT_EXPIRESIN, // 60 * 60 * 24, // '10h',
        // audience: String(client.clientId).toLowerCase(),
        issuer: String(process.env.JWT_ISSUER),
        // subject: String(user._id).toLowerCase(),
      },
      options
    )
  )
}

/**
 * verify token
 * @param {String} accessToken
 */
const verifyToken = (accessToken) => jwt.verify(accessToken, process.env.JWT_SECRET)

module.exports = {
  generateAccessToken,
  verifyToken,
}
