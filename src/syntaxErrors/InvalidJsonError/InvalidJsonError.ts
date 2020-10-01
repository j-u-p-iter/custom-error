import { SyntxError } from "../SyntxError";
import { SyntaxErrorType } from "../types";

interface InvalidJsonConfig {
  context?: string;
}

/**
 * Create a InvalidJsonError object
 *
 * @class
 *
 * @param {string} message An error message
 * @param {object} [config] A configuration object
 * @param {string} [config.context] The location, where error has happened
 *   (like "UsersService", "UploadService", "JsonDatabase" and etc.).
 *
 * @example
 * const invalidJsonError = new InvalidJsonError('path/to/file.json', { context: 'JsonDatabase' });
 */
export class InvalidJsonError extends SyntxError {
  constructor(invalidJsonPath: string, config: InvalidJsonConfig = {}) {
    super(`JSON data in "${invalidJsonPath}" is not valid`, {
      ...config,
      invalidJsonPath
    });

    this.name = "InvalidJsonError";
  }

  public serialize = () => {
    return {
      error: {
        message: this.message,
        type: SyntaxErrorType.INVALID_JSON_ERROR,
        invalidJsonPath: this.invalidJsonPath,
        context: this.context
      }
    };
  };
}
