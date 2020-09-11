import { ValidationError, ValidationErrorType } from "./ValidationError";

/**
 * All unique properties we assign directly in the class (like "property" property)
 *
 * All common properties, like "context", "code" we pass to the CustomError
 *   not to assign them all over the different places.
 */
export class PropertyIsRequiredError extends ValidationError {
  constructor(private property: string, options?: any) {
    super(`Property ${property} is not found`, options);

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
