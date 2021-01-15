interface CustomErrorInterface {
  name: string;
  date: Date;
  context?: string;
}

/**
 * The common initialization error config.
 *   We use it to set up common state for all inheriting instances:
 *     - set up context - the name of the location, an error comes from;
 *     - exclude implementation details from the stack with "Error.captureStackTrace".
 *
 */
export interface CustomErrorConfig {
  context: string;
  excludeFromStack: any;
}

/**
 * Create a CustomError object
 *
 * @abstract
 *
 * @param {string} message An error message
 * @param {object} [config] A configuration object
 * @param {string} [config.context] The location, where an error has happened (like "UsersService", "UploadService" and etc.).
 * @param {function} [config.excludeFromStack] A callback you need to exclude from the result stack.
 *
 * @example
 * new CustomError('Some error has happened');
 */

export class CustomError extends Error implements CustomErrorInterface {
  public date: Date = new Date();
  public context;

  constructor(message: string, config?: CustomErrorConfig) {
    super(message);

    for (const key in config) {
      if (config.hasOwnProperty(key)) {
        this[key] = config[key];
      }
    }

    /**
     *  Without passing the excludeFromStack function to captureStackTrace, this frame
     *  would show up in the .stack property. By passing
     *  this function, we omit that frame, and retain all frames below it.
     *
     *  So, for example if we throw BadRequestError from some app.ts module
     *    the first lines would look without the next line approximately like that:
     *    at BadRequestError.CustomError (CustomError.ts:799:130)
     *    at BadRequestError.HttpError [as constructor] (httpErrors/HttpError.ts:742:130)
     *    at new BadRequestError (httpErrors/BadRequestError/BadRequestError.ts:1192:132)
     *    at Suite.<anonymous> (app.ts:11:9)
     *
     *  By passing BadRequestError as an "excludeFromStack" in the config,
     *    we'll exclude the first three lines and the first line in the stack
     *    would be:
     *    at Suite.<anonymous> (app.ts:11:9)
     *
     *  This way we're hiding implementation details from the stack, allowing
     *    to the error consumer detect the place the error has happened more easily.
     *
     */

    Error.captureStackTrace(this, config.excludeFromStack);
  }
}
