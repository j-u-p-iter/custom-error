interface CustomErrorInterface {
  name: string;
  date: string;
  code?: number;
}

export interface CustomErrorConfig {
  code?: number;
  context?: string; 
  property?: string;
  type?: string;
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
 * @param {string} [config.type] The type of an error, that plays the role of an error code.
 * @param {string} [config.context] The location, where error has happened (like "UsersService", "UploadService" and etc.).
 * @param {string} [config.property] The invalid property name.
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

    this.name = this.constructor.name;

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
