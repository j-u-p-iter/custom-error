import { BaseErrorConfig } from "../../.";
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
  constructor(property: string, config: BaseErrorConfig = {}) {
    super(`Property ${property} is not found`, { ...config, property });

    this.name = "PropertyIsRequiredError";

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
