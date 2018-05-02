'use strict';

const compose = require('koa-compose');


/**
 * The framework for serverless application
 */
class Omega {
  /**
   * Create a new Omega instance.
   *
   * @param {Object} options={} - The configuration of the Omega.
   */
  constructor(options = {}) {
    console.log(options);
    this.middlewares = [];
  }

  /**
   * Use the given function as middleware.
   *
   * @param {function} middleware - The middleware function to use.
   * @return {Omega} self
   */
  use(middleware) {
    if (typeof middleware !== 'function')
      throw new TypeError('middleware must be a function!');

    this.middlewares.push(middleware);
    return this;
  }

  createLambda(...handlers) {
    const middleware = compose(this.middlewares);
    const handler = compose(handlers);

    return async (event, context) => {
      const ctx = {
        ...context,
        event
      };

      return await middleware(ctx, handler);
    };
  }
}

module.exports = Omega;
