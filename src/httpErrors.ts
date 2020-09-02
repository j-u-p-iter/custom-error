import { CustomError, CustomErrorConfig } from './CustomError';

export class HTTPError extends CustomError {
  constructor(message: string, config: CustomErrorConfig) {
    super(message, config)
    this.name = 'HTTPError';
  }
}

export const httpErrors = {
  badRequest: (message) => new HTTPError(message, { code: 400, excludeFromStack: httpErrors.badRequest }),
}
