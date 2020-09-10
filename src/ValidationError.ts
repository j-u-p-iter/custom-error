import { CustomError, CustomErrorConfig } from "./CustomError";

// as practise shows - usage of the error messages from the server on the client side is pretty rare thing;
// depending on the context - error message should look differently
// this is why we provide type property and additional info as `property`, 
// `invalidEmail` in the serialized object to
// give opportunity to the client to make decision, what error it wants to show.

// serialize methods serves to prepare errors for the error HTTP requests.
// we need to find the way to localize the error messages
//
// also it would be great to add `code` error field to make an error more verbose
// what is necessary especially on the client side: 
// There is an interesting article on this topic: https://nordicapis.com/best-practices-api-error-handling/

enum ValidationErrorType {
  PROPERTY_IS_REQUIRED_ERROR = 'PropertyIsRequiredError',
  INVALID_EMAIL_ERROR = 'InvalidEmailError',
}

export class ValidationError extends CustomError {
  constructor(message: string, config: CustomErrorConfig) {
    super(message, config);

    this.name = "ValidationError";
  }
}

export class PropertyIsRequiredError extends ValidationError {
  constructor(private property: string) {
    super(this.getMessage(), { property });

    this.name = ValidationErrorType.PROPERTY_IS_REQUIRED_ERROR;
  }

  private getMessage() {
    return `Property ${this.property} is not found`;
  }

  public serialize() {
    return {
      error: {
        message: getMessage(),
        type: ValidationErrorType.PROPERTY_IS_REQUIRED_ERROR,
        property: this.property,
      }
    };
  }
}

export class InvalidEmailError extends ValidationError {
  constructor(private invalidEmail: string) {
    super(getMessage(), { invalidEmail });

    this.name = ValidationErrorType.INVALID_EMAIL_ERROR;
  }

  private getMessage() {
    return `Email ${this.invalidEmail} is not valid`;
  } 

  public serialize() {
    return {
      error: {
        message: getMessage(),
        type: ValidationErrorType.INVALID_EMAIL_ERROR,
        invalidEmail: this.invalidEmail,
      }
    }
  }
}
