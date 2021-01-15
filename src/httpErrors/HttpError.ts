import { BaseErrorConfig, CustomError } from "../CustomError";

interface HttpErrorConfig extends BaseErrorConfig {}

export class HttpError extends CustomError {
  constructor(message: string, config: HttpErrorConfig) {
    super(message, config);

    this.name = "HTTPError";

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
