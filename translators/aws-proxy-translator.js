'use strict';

const { convertMapToObject } = require('../lib/utils');


/**
 * Return middleware that translates the request and response from/to
 * the AWS Lambda Proxy Integration context.
 *
 * @param {Object} [options={}] - Optional configuration.
 * @param {boolean} [options.isBase64Encoded=false] - Flag for response body base64 encoding.
 * @return {function} Omega translator middleware.
 */
function AwsProxyTranslator(options = {}) {
  const {
    isBase64Encoded = false
  } = options;

  // TODO: translate the request
  return async (ctx, next) => {
    ctx.headers = new Map();

    await next();

    const response = {
      isBase64Encoded,
      statusCode: ctx.status || 500,
      headers: convertMapToObject(ctx.headers),
      body: JSON.stringify(ctx.body)
    };
    return response;
  };
}

module.exports = AwsProxyTranslator;
