module.exports = {
    secretToken: process.env.JWT_SECRET,
    accessExpires: process.env.ACCESS_EXPIRE,
    refreshExpires: process.env.REFRESH_EXPIRE,
    rounds: 10,
};
  