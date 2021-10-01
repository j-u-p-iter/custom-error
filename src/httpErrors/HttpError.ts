import { CustomError, CustomErrorConfig } from "../CustomError";

export class HttpError extends CustomError {
  constructor(message: string, config: CustomErrorConfig) {
    super(message, config);

    this.name = "HttpError";

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
