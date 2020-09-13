interface CustomErrorInterface {
  name: string;
  date: string;
  code?: number;
  context?: string;
  property?: string;
  invalidEmail?: string;
}

export interface BaseErrorConfig {
  context?: string;
}

/**
 * CustomError knows about all properties, child objects use.
 */
export interface CustomErrorConfig extends BaseErrorConfig {
  code?: number;
  property?: string;
  invalidEmail?: string;
}

/**
 * Create a CustomError object
 *
 * @abstract
 *
 * @param {string} message An error message
 * @param {object} [config] A configuration object
 * @param {number} [config.code] HTTP status code.
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
  public context;
  public code;
  public property;
  public invalidEmail;

  constructor(message: string, config?: CustomErrorConfig) {
    super(message);

    for (const key in config) {
      if (config.hasOwnProperty(key)) {
        this[key] = config[key];
      }
    }

    this.date = new Date();
  }

  serialize() {}
}
