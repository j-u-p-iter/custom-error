import { CustomErrorConfig } from "../../CustomError";
import { ValidationError, ValidationErrorType } from "../ValidationError";

export class InvalidEmailError extends ValidationError {
  constructor(invalidEmail: string, config: CustomErrorConfig = {}) {
    super(`Email ${invalidEmail} is not valid`, { ...config, invalidEmail });

    this.name = "InvalidEmailError";
  }

  public serialize = () => {
    return {
      error: {
        message: this.message,
        type: ValidationErrorType.INVALID_EMAIL_ERROR,
        invalidEmail: this.invalidEmail,
        context: this.context
      }
    };
  };
}
