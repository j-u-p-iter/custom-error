import { ValidationError, ValidationErrorType } from './ValidationError';

export class InvalidEmailError extends ValidationError {
  constructor(private invalidEmail: string, config?: any) {
    super('Email is not valid', config);

    this.invalidEmail = invalidEmail;
  }

  private getMessage() {
    return `Email ${this.invalidEmail} is not valid`;
  } 

  public serialize() {
    return {
      error: {
        message: this.getMessage(),
        type: ValidationErrorType.INVALID_EMAIL_ERROR,
        invalidEmail: this.invalidEmail,
      }
    }
  }
}
