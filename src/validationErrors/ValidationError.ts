import { HttpStatus } from "@j.u.p.iter/http-status";

import { BaseErrorConfig, CustomError } from "../CustomError";

export enum ValidationErrorType {
  PROPERTY_IS_REQUIRED_ERROR = "propertyIsRequiredError",
  INVALID_EMAIL_ERROR = "invalidEmailError"
}

/**
 * ValidationError knows about
 * all properties child objects have.
 */
interface ValidationErrorConfig extends BaseErrorConfig {
  property?: string;
  invalidEmail?: string;
}

export class ValidationError extends CustomError {
  constructor(message: string, config: ValidationErrorConfig = {}) {
    super(message, { ...config, code: HttpStatus.BAD_REQUEST });

    this.name = "ValidationError";
  }
}
