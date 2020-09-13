import { ValidationErrorType } from "../types";
import { ValidationError } from "../ValidationError";

interface InvalidEmailConfig {
  context?: string;
}

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
  constructor(invalidEmail: string, config: InvalidEmailConfig = {}) {
    super(`Email ${invalidEmail} is not valid`, { ...config, invalidEmail });

    this.name = "InvalidEmailError";
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
