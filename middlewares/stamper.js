'use strict';

module.exports = (req, res, next) => {
  req.timeStamp = new Date().toISOString();
  next();
};