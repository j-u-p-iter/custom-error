import { SubErrorConfig } from "../../.";
import { HttpError } from "../HttpError";

export interface CommonHttpErrorConfig {
  // the same as status
  code: number;
  request?: Request;
  response?: Response;
}

export class CommonHttpError extends HttpError {
  public code: number;
  public request?: Request = null;
  public response?: Response = null;

  constructor(
    message: string,
    httpErrorConfig: CommonHttpErrorConfig,
    config: SubErrorConfig
  ) {
    super(message, { ...config, excludeFromStack: CommonHttpError });

    const { code, request, response } = httpErrorConfig;

    this.name = "CommonHttpError";
    this.code = code;
    this.request = request;
    this.response = response;

    Object.setPrototypeOf(this, CommonHttpError.prototype);
  }

  public toJSON = () => {
    return {
      error: {
        message: this.message,
        context: this.context,
        type: "HTTPError",
        request: this.request,
        response: this.response,
        code: this.code
      }
    };
  };
}
