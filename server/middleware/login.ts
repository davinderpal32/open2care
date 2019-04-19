import express from 'express';
const jwt = require('express-jwt');
import jwksRsa from 'jwks-rsa';

const app = express();

export const checkJwt = jwt({
        secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `http://localhost:3000//.well-known/jwks.json`
        }),
        audience: 'https://dev-680f7trh.auth0.com/api/v2/',
        issuer: `http://localhost:3000/`,
        algorithms: ['RS256']
    });
  export default checkJwt;