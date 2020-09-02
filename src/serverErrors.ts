import { CustomError, CustomErrorConfig } from './CustomError';

export class ServerError extends CustomError {
  constructor(message: string, config: CustomErrorConfig) {
    super(message, config)
    this.name = 'ServerError';
  }
}

export const serverErrors = {
  badRequest: (message) => new ServerError(message, { code: 400, excludeFromStack: serverErrors.badRequest }),
}
