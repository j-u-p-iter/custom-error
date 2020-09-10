import { CustomError, CustomErrorConfig } from "./CustomError";

/**
 * Create a custom HTTPError object related to the appropriate HTTP errors
 *
 * @class
 *
 * @param {string} message An error message
 * @param {object} [config] A configuration object
 * @param {number} [config.code] HTTP status code.
 *   [Available HTTP status codes]{@link https://github.com/j-u-p-iter/http-status/blob/master/docs/API.md}
 * @param {function} [config.excludeFromStack] A callback you need to exclude from the result stack.
 *
 * @example
 * class HTTPError extends CustomError {
 *   constructor(message: string, config: CustomErrorConfig) {
 *     super(message, config)
 *     this.name = 'HTTPError';
 *   }
 * }
 *
 * new HTTPError('Request data is incorrect', { code: 400 })
 */
export class HTTPError extends CustomError {
  constructor(message: string, config: CustomErrorConfig) {
    super(message, config);
    this.name = "HTTPError";
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string, config: CustomErrorConfig) {
    super(message, config);
    this.name = "BadRequestError";
  }
}
