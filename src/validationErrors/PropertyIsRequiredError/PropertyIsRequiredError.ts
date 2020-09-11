import { BaseErrorConfig } from "../../CustomError";
import { ValidationError, ValidationErrorType } from "../ValidationError";

export class PropertyIsRequiredError extends ValidationError {
  constructor(property: string, config: BaseErrorConfig = {}) {
    super(`Property ${property} is not found`, { ...config, property });

    this.name = "PropertyIsRequiredError";
  }

  public serialize = () => {
    return {
      error: {
        message: this.message,
        type: ValidationErrorType.PROPERTY_IS_REQUIRED_ERROR,
        property: this.property,
        context: this.context
      }
    };
  };
}
