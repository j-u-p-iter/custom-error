import { BaseErrorConfig, CustomError } from "../CustomError";

/**
 * ValidationError knows about
 * all properties child objects have.
 */
interface SyntaxErrorConfig extends BaseErrorConfig {}

/**
 * We name it SyntxError, cause there's already
 * built in SyntaxError class
 *
 */
export class SyntxError extends CustomError {
  constructor(message: string, config: SyntaxErrorConfig = {}) {
    super(message, config);

    this.name = "SyntaxError";

    Object.setPrototypeOf(this, SyntxError.prototype);
  }
}
