interface Data {
  [key: string]: string | number;
}

interface CustomErrorInterface {
  name: string;
  date: string;
  code?: number;
  data?: Data;
}

export interface CustomErrorConfig {
  code?: number;
  data?: Data;
  excludeFromStack?: Function;
}

export class CustomError extends Error implements CustomErrorInterface {
  public date;

  constructor(message: string, config: CustomErrorConfig) {
    super(message);

    this.name = 'CustomError';
    
    for (let key in config) {
      if (config !== 'excludeFromStack') {
        this[key] = config[key];
      }
    }

    this.date = new Date();

    if (config.excludeFromStack) {
      Error.captureStackTrace(this, config.excludeFromStack);
    }
  }
}
