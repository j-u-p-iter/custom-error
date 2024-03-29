import { SubErrorConfig } from "../../.";
import { ValidationErrorType } from "../types";
import { ValidationError } from "../ValidationError";

/**
 * Create a InvalidPathError object
 *
 * @class
 *
 * @param {string} invalidPath A path to a file or a directory, that does not exist
 * @param {boolean} isPathToFile Is a provided path a file path.
 * @param {object} [config] A configuration object
 * @param {string} [config.context] The location, where error has happened
 *   (like "UsersService", "UploadService" and etc.).
 *
 * @example
 * const invalidPathError = new InvalidPathError('/path/to/directory', false, { context: 'UsersService' });
 */
// need to detect is path to file or not in this package
export class InvalidPathError extends ValidationError {
  public invalidPath;

  constructor(invalidPath: string, isFile: boolean, config: SubErrorConfig) {
    super(`${isFile ? "File" : "Directory"} ${invalidPath} does not exist`, {
      ...config,
      excludeFromStack: InvalidPathError
    });

    this.name = "InvalidPathError";
    this.invalidPath = invalidPath;

    Object.setPrototypeOf(this, InvalidPathError.prototype);
  }

  public serialize = () => {
    return {
      error: {
        message: this.message,
        type: ValidationErrorType.INVALID_PATH_ERROR,
        invalidPath: this.invalidPath,
        context: this.context
      }
    };
  };
}
