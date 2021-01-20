import { SubErrorConfig } from "../../.";
import { ValidationErrorType } from "../types";
import { ValidationError } from "../ValidationError";

/**
 * Create a PropertyIsRequiredError object
 *
 * @class
 *
 * @param {string} message An error message
 * @param {object} [config] A configuration object
 * @param {string} [config.context] The location, where error has happened
 *   (like "UsersService", "UploadService" and etc.).
 *
 * @example
 * const propertyIsRequiredError = new PropertyIsRequiredError('photoURL', { context: 'UploadService' });
 */
export class PropertyIsRequiredError extends ValidationError {
  public property;

  constructor(property: string, config: SubErrorConfig) {
    super(`Property ${property} is not found`, {
      ...config,
      excludeFromStack: PropertyIsRequiredError
    });

    this.name = "PropertyIsRequiredError";
    this.property = property;

    Object.setPrototypeOf(this, PropertyIsRequiredError.prototype);
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
