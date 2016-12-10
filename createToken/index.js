'use strict';

const jwt = require('jsonwebtoken');
const jwtOptions = {
  secretOrKey: 'serverless-custom-auth-example',
  expiresIn: { expiresIn: '1h'},
};

const payload = { id: 'user'};
const token = jwt.sign(payload, jwtOptions.secretOrKey, jwtOptions.expiresIn);

console.log(`token: ${token}`);
