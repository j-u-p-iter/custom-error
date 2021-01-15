import { ValidationErrorType } from "../types";
import { ValidationError } from "../ValidationError";

interface InvalidFileTypeConfig {
  context?: string;
}

/**
 * Create a InvalidFileTypeError object
 *
 * @class
 *
 * @param {string} invalidFileExtension  An invalid file extension
 * @param {string} requiredFileExtension An expected file extension
 * @param {object} [config] A configuration object
 * @param {string} [config.context] The location, where error has happened
 *   (like "UsersService", "UploadService" and etc.).
 *
 * @example
 * const invalidFileType = new InvalidFileType('.txt', '.json', { context: 'UsersService' });
 */
export class InvalidFileTypeError extends ValidationError {
  public invalidExtension;
  public requiredExtension;

  constructor(
    invalidExtension: string,
    requiredExtension: string,
    config: InvalidFileTypeConfig = {}
  ) {
    super(
      `${invalidExtension} file is not allowed. Instead you should use a ${requiredExtension} file.`,
      config
    );

    this.name = "InvalidFileTypeError";
    this.invalidExtension = invalidExtension;
    this.requiredExtension = requiredExtension;

    Object.setPrototypeOf(this, InvalidFileTypeError.prototype);
  }

  public serialize = () => {
    return {
      error: {
        message: this.message,
        type: ValidationErrorType.INVALID_FILE_TYPE_ERROR,
        invalidExtension: this.invalidExtension,
        requiredExtension: this.requiredExtension,
        context: this.context
      }
    };
  };
}
