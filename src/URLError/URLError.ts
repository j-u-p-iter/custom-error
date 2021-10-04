import { CustomError, CustomErrorConfig } from "../CustomError";

export class URLError extends CustomError {
  public invalidURL: string;

  constructor(
    message: string,
    invalidURL: string,
    config: Omit<CustomErrorConfig, "excludeFromStack">
  ) {
    super(message, { ...config, excludeFromStack: URLError });

    this.name = "URLError";
    this.invalidURL = invalidURL;

    Object.setPrototypeOf(this, URLError.prototype);
  }

  public toJSON = () => {
    return {
      error: {
        message: this.message,
        context: this.context,
        type: "URLError",
        invalidURL: this.invalidURL
      }
    };
  };
}
