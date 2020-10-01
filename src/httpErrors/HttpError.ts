import { BaseErrorConfig, CustomError } from "../CustomError";

interface HttpErrorConfig extends BaseErrorConfig {
  code: number;
}

export class HttpError extends CustomError {
  constructor(message: string, config: HttpErrorConfig) {
    super(message, config);

    this.name = "HTTPError";

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
