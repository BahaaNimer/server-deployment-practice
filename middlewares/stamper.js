'use strict';

module.exports = (req, res, next) => {
  res.timeStamp = new Date()
  next();
};