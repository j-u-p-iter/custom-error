import { SubErrorConfig } from "../../.";
import { TSError } from "../TSError";
import { TSErrorType } from "../types";

/**
 * Create a TSParseError object
 *
 * @class
 *
 * @param {string} message An error message
 * @param {object} [config] A configuration object
 * @param {string} [config.context] The location, where error has happened
 *   (like "UsersService", "UploadService" and etc.).
 *
 * @example
 * const tsError = new TSParseError(
 *   'path/to/invalid/tsconfig.json',
 *   { context: 'UsersService' },
 *  );
 */
export class TSParseError<Diagnostics = any[]> extends TSError {
  public diagnostics: Diagnostics;
  public pathToConfig: string;

  constructor(
    errorMessage,
    pathToConfig: string,
    diagnostics: Diagnostics,
    config: SubErrorConfig
  ) {
    super(errorMessage, {
      ...config,
      excludeFromStack: TSParseError
    });

    this.name = "TSParseError";

    this.pathToConfig = pathToConfig;
    this.diagnostics = diagnostics;

    Object.setPrototypeOf(this, TSParseError.prototype);
  }

  public toJSON() {
    return {
      error: {
        message: this.message,
        type: TSErrorType.TS_PARSE_ERROR,
        diagnostics: this.diagnostics,
        context: this.context
      }
    };
  }
}
