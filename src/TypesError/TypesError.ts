import { CustomError, CustomErrorConfig } from "../CustomError";

export interface TypesErrorConfig {
  identifierName: string;
  expectedType: string;
  invalidType: string;
}

/**
 * It's called TypesError, cause TypeError
 *   is reserved by native browser's JavaScript
 *
 */
export class TypesError extends CustomError {
  public identifierName: string;
  public expectedType: string;
  public invalidType: string;

  constructor(
    message: string,
    typesErrorConfig: TypesErrorConfig,
    config: CustomErrorConfig
  ) {
    super(message, { ...config, excludeFromStack: TypesError });

    const { identifierName, expectedType, invalidType } = typesErrorConfig;

    this.name = "TypesError";
    this.identifierName = identifierName;
    this.expectedType = expectedType;
    this.invalidType = invalidType;

    Object.setPrototypeOf(this, TypesError.prototype);
  }

  public toJSON = () => {
    return {
      error: {
        message: this.message,
        context: this.context,
        type: "TypesError",
        identifierName: this.identifierName,
        expectedType: this.expectedType,
        invalidType: this.invalidType
      }
    };
  };
}
