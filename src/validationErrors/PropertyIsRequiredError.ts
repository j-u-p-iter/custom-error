import { CustomError, CustomErrorConfig } from "../CustomError";
import { ValidationError, ValidationErrorType } from './ValidationError';

/**
 * All unique properties we assign directly in the class (like "property" property)
 *
 * All common properties, like "context", "code" we pass to the CustomError
 *   not to assign them all over the different places.
 */
export class PropertyIsRequiredError extends ValidationError {
  constructor(private property: string, options?: any) {
    super('Property is not found', options);

    this.message = this.getMessage();;
  }

  private getMessage() {
    return `Property ${this.property} is not found`;
  }

  public serialize() {
    return {
      error: {
        message: this.getMessage(),
        type: ValidationErrorType.PROPERTY_IS_REQUIRED_ERROR,
        property: this.property,
      }
    };
  }
}
