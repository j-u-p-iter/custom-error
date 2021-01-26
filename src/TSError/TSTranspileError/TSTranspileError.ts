import { SubErrorConfig } from "../../.";
import { TSError } from "../TSError";
import { TSErrorType } from "../types";

/**
 * Create a TSTranspileError object
 *
 * @class
 *
 * @param {string} message An error message
 * @param {object} [config] A configuration object
 * @param {string} [config.context] The location, where error has happened
 *   (like "UsersService", "UploadService" and etc.).
 *
 * @example
 * const tsError = new TSTranspileError(
 *   'path/to/invalid/file.ts',
 *   { context: 'UsersService' },
 *  );
 */
export class TSTranspileError<Diagnostics = any[]> extends TSError {
  public diagnostics: Diagnostics;
  public pathToFile: string;

  constructor(
    errorMessage,
    pathToFile: string,
    diagnostics: Diagnostics,
    config: SubErrorConfig
  ) {
    super(errorMessage, {
      ...config,
      excludeFromStack: TSTranspileError
    });

    this.name = "TSTranspileError";

    this.pathToFile = pathToFile;
    this.diagnostics = diagnostics;

    Object.setPrototypeOf(this, TSTranspileError.prototype);
  }

  public toJSON() {
    return {
      error: {
        message: this.message,
        type: TSErrorType.TS_TRANSPILE_ERROR,
        diagnostics: this.diagnostics,
        context: this.context
      }
    };
  }
}
