import { HttpStatus } from "@j.u.p.iter/http-status";

import { SubErrorConfig } from "../../.";
import { HttpError } from "../HttpError";
import { HttpErrorType } from "../types";

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
 * const badRequestError = new BadRequestError('Users request data is not correct', { context: 'UsersService' });
 */
export class BadRequestError extends HttpError {
  public code;

  constructor(message: string, config: SubErrorConfig) {
    super(message, {
      ...config,
      excludeFromStack: BadRequestError
    });

    this.name = "BadRequestError";
    this.code = HttpStatus.BAD_REQUEST;

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  public toJSON = () => {
    return {
      error: {
        message: this.message,
        type: HttpErrorType.BAD_REQUEST_ERROR,
        context: this.context
      }
    };
  };
}
