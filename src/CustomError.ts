interface CustomErrorInterface {
  name: string;
  date: string;
  code?: number;
}

export interface CustomErrorConfig {
  code?: number;
  excludeFromStack?: Function;
}

/**
 * Create a CustomError object
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
 * new CustomError('Some error has happened');
 */

export class CustomError extends Error implements CustomErrorInterface {
  public date;

  constructor(message: string, config?: CustomErrorConfig) {
    super(message);

    this.name = "CustomError";

    for (const key in config) {
      if (config !== "excludeFromStack") {
        this[key] = config[key];
      }
    }

    this.date = new Date();

    if (config.excludeFromStack) {
      Error.captureStackTrace(this, config.excludeFromStack);
    }
  }
}
