import { HttpStatus } from "@j.u.p.iter/http-status";

import { CustomError, CustomErrorConfig } from "../CustomError";

export class ValidationError extends CustomError {
  public code;

  constructor(message: string, config: CustomErrorConfig) {
    super(message, config);

    this.name = "ValidationError";
    this.code = HttpStatus.BAD_REQUEST;

    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
