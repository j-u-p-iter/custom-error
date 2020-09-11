import { CustomError, CustomErrorConfig } from "../CustomError";

export enum ValidationErrorType {
  PROPERTY_IS_REQUIRED_ERROR = "propertyIsRequiredError",
  INVALID_EMAIL_ERROR = "invalidEmailError"
}

export class ValidationError extends CustomError {
  constructor(message: string, config?: CustomErrorConfig) {
    super(message, { ...config, code: 400 });
  }
}
