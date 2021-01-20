import { CustomError, CustomErrorConfig } from "../CustomError";

/**
 * We name it SyntxError, cause there's already
 * built in SyntaxError class
 *
 */
export class SyntxError extends CustomError {
  constructor(message: string, config: CustomErrorConfig) {
    super(message, config);

    this.name = "SyntaxError";

    Object.setPrototypeOf(this, SyntxError.prototype);
  }
}
