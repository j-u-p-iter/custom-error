export const stringifyAndParse = (error: Error): { [key: string]: any; } => JSON.parse(JSON.stringify(error));
