import { BaseErrorConfig, CustomError } from "../.";

export enum HttpErrorType {
  BAD_REQUEST_ERROR = "badRequestError"
}

interface HttpErrorConfig extends BaseErrorConfig {
  code: number;
}

export class HttpError extends CustomError {
  constructor(message: string, config: HttpErrorConfig) {
    super(message, config);

    this.name = "HTTPError";
  }
}
