import { SubErrorConfig } from "../../.";
import { ValidationErrorType } from "../types";
import { ValidationError } from "../ValidationError";

/**
 * Create a InvalidEmailError object
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
export class InvalidEmailError extends ValidationError {
  public invalidEmail;

  constructor(invalidEmail: string, config: SubErrorConfig) {
    super(`Email ${invalidEmail} is not valid`, {
      ...config,
      excludeFromStack: InvalidEmailError
    });

    this.name = "InvalidEmailError";
    this.invalidEmail = invalidEmail;

    Object.setPrototypeOf(this, InvalidEmailError.prototype);
  }

  public serialize = () => {
    return {
      error: {
        message: this.message,
        type: ValidationErrorType.INVALID_EMAIL_ERROR,
        invalidEmail: this.invalidEmail,
        context: this.context
      }
    };
  };
}
