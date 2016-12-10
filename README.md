# serverless-custom-auth-example

# Quick Start
```
npm install -g serverless
cd createToken && npm install
cd ../jwtAuthorizer && npm install
cd ..
serverless deploy
```

# Resource
- hello (API)
- goodNight (API)

- jwtAuthorizer (lambda function, it's using authorizer in API Gateway)
- cerateToken (node function, it's create jwt token)

# how to try
1. create token
2. call hello API with token

## 1. create token

```
node createToken/index.js
token: dasdasdasdasdasdasdasda.eyJpZCI6InVzZXIiLCJpYXQiOjE0ODEzODAwMDMsImV4cCI6MTQ4MTM4MzYwM30.hhV0IVMWJAZGOixzsyNbluL4Eqe4cgtlk7NtA3SHaRI
```

## 2. call hello API with token

```
curl -X POST https://xxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/hello -H 'Authorization: Bearer dasdasdasdasdasdasdasda.eyJpZCI6InVzZXIiLCJpYXQiOjE0ODEzODAwMDMsImV4cCI6MTQ4MTM4MzYwM30.hhV0IVMWJAZGOixzsyNbluL4Eqe4cgtlk7NtA3SHaRI' | jq

{
  "statusCode": 200,
  "body": "{\"message\":\"Go Serverless v1.0! Your function executed successfully!\"}"
}
```
