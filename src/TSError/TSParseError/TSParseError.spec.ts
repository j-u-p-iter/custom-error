import { TSParseError } from './TSParseError';
import { TSError } from '../TSError';
import { TSErrorType } from '../types';
import { CustomError } from '../../CustomError';


describe('TSParseError', () => {
  let errorMessage;
  let createTSParseError;
  let pathToConfig;
  let diagnostics;
  let context;

  beforeAll(() => {
    errorMessage = 'Some error message';
    pathToConfig = '/path/to/config.json';
    diagnostics = [{ error: 'Some error has happened' }];
    context = 'UsersService';

    createTSParseError = () => {
      return new TSParseError(
        errorMessage,
        pathToConfig,
        diagnostics,
        { context }
      )
    };
  });

  it('creates an error with a correct type', () => {
    const tsError = createTSParseError();

    expect(tsError).toBeInstanceOf(TSParseError);
    expect(tsError).toBeInstanceOf(TSError);
    expect(tsError).toBeInstanceOf(CustomError);
    expect(tsError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const tsError = createTSParseError();

    expect(tsError.message).toBe(errorMessage);
  });

  it('creates an error with a correct name', () => {
    const tsError = createTSParseError();

    expect(tsError.name).toBe('TSParseError');
  });

  it('creates an error with a correct pathToConfig', () => {
    const tsError = createTSParseError();

    expect(tsError.pathToConfig).toBe(pathToConfig);
  });

  it('creates an error with a correct diagnostics', () => {
    const tsError = createTSParseError();

    expect(tsError.diagnostics).toEqual(diagnostics);
  });

  it('create an error with correct serialization data', () => {
    const tsError = createTSParseError();

    const expectedSerializedData = {
      error: {
        message: errorMessage,
        type: TSErrorType.TS_PARSE_ERROR,
        diagnostics,
        context,
      }
    };

    expect(JSON.stringify(tsError)).toBe(JSON.stringify(expectedSerializedData));
  });
});
