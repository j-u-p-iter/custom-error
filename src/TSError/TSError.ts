import { CustomError, CustomErrorConfig } from "../CustomError";

export class TSError extends CustomError {
  constructor(message: string, config: CustomErrorConfig) {
    super(message, config);

    this.name = "TSError";

    Object.setPrototypeOf(this, TSError.prototype);
  }
}
