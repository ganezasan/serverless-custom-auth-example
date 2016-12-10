const jwt = require('jsonwebtoken');
const jwtOptions = {
  secretOrKey: 'serverless-custom-auth-example',
  expiresIn: { expiresIn: '1h'},
};

const generatePolicy = function(principalId, effect, resource) {
  const authResponse = {};
  authResponse.principalId = principalId;

  if (effect && resource) {
    const policyDocument = {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource
        }
      ]
    };
    authResponse.policyDocument = policyDocument;
  }
  return authResponse;
};

module.exports.jwtAuthorizer = (event, context) => {
  const jsonWebToken = event.authorizationToken.split(' ')[1];

  jwt.verify(jsonWebToken, jwtOptions.secretOrKey, (err, decode) => {
    if (err) {
      return context.fail("Unauthorized");
    }

    if (decode.id !== 'user') {
      return context.succeed(generatePolicy('user', 'Deny', event.methodArn));
    } else {
      return context.succeed(generatePolicy('user', 'Allow', event.methodArn));
    }
  });
};
