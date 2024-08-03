import { expressjwt, GetVerificationKey } from "express-jwt";
import jwks from "jwks-rsa";

const AUTH0_AUDIENCE= process.env.AUTH0_AUDIENCE
const AUTH0_DOMAIN= process.env.AUTH0_DOMAIN

const jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`
  }) as GetVerificationKey,
  audience: `${AUTH0_AUDIENCE}`,
  issuer: `https://${AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

export default jwtCheck