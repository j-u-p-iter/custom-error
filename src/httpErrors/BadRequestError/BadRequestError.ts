import { HttpStatus } from "@j.u.p.iter/http-status";

import { HttpError, HttpErrorType } from "../HttpError";

/**
 * Create a BadRequestError object
 *
 * @class
 *
 * @param {string} message An error message
 * @param {object} [config] A configuration object
 * @param {string} [config.context] The location, where error has happened
 *   (like "UsersService", "UploadService" and etc.).
 *
 * @example
 * const invalidEmailError = new InvalidEmailError('invalidEmail', { context: 'UsersService' });
 */

interface BadRequestErrorConfig {
  context?: string;
}

export class BadRequestError extends HttpError {
  constructor(message: string, config: BadRequestErrorConfig = {}) {
    super(message, { ...config, code: HttpStatus.BAD_REQUEST });

    this.name = "BadRequestError";
  }

  public serialize = () => {
    return {
      error: {
        message: this.message,
        type: HttpErrorType.BAD_REQUEST_ERROR,
        context: this.context
      }
    };
  };
}
