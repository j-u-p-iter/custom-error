import { CustomError, CustomErrorConfig } from "./CustomError";

export class ValidationError extends CustomError {
  constructor(message: string, config: CustomErrorConfig) {
    super(message, config);
    this.name = "ValidationError";
  }
}

export const validationErrors = {
  badRequest: message =>
    new ValidationError(message, {
      code: 400,
      excludeFromStack: validationErrors.badRequest
    })
};
