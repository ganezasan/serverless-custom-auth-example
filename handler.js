'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
    }),
  };

  callback(null, response);
};

module.exports.goodNight = (event, context, callback) => {
  callback(null, { Message: 'Good goodNight World!'});
};
