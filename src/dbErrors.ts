import { CustomError, CustomErrorConfig } from './CustomError';

export class DBError extends CustomError {
  constructor(message: string, config: CustomErrorConfig) {
    super(message, config)
    this.name = 'DBError';
  }
}

export const dbErrors = {
  badRequest: (message) => new DBError(message, { code: 400, excludeFromStack: dbErrors.badRequest }),
}
