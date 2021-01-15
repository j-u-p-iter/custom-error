import { CustomErrorConfig } from "../../.";
import { SyntxError } from "../SyntxError";
import { SyntaxErrorType } from "../types";

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
  public invalidJsonPath;

  constructor(invalidJsonPath: string, config: CustomErrorConfig = {}) {
    super(`JSON data in "${invalidJsonPath}" is not valid`, config);

    this.name = "InvalidJsonError";
    this.invalidJsonPath = invalidJsonPath;

    Object.setPrototypeOf(this, InvalidJsonError.prototype);
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
