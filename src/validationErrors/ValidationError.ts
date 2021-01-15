import { HttpStatus } from "@j.u.p.iter/http-status";

import { BaseErrorConfig, CustomError } from "../CustomError";

/**
 * ValidationError knows about
 * all properties child objects have.
 *
 */
interface ValidationErrorConfig extends BaseErrorConfig {}

export class ValidationError extends CustomError {
  constructor(message: string, config: ValidationErrorConfig = {}) {
    super(message, { ...config, code: HttpStatus.BAD_REQUEST });

    this.name = "ValidationError";

    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
