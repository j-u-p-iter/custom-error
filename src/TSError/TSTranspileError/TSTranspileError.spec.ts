import { TSTranspileError } from './TSTranspileError';
import { TSError } from '../TSError';
import { TSErrorType } from '../types';
import { CustomError } from '../../CustomError';


describe('TSTranspileError', () => {
  let errorMessage;
  let createTSTranspileError;
  let pathToFile;
  let diagnostics;
  let context;

  beforeAll(() => {
    errorMessage = 'Some error message';
    pathToFile = '/path/to/file.ts';
    diagnostics = [{ error: 'Some error has happened' }];
    context = 'UsersService';

    createTSTranspileError = () => {
      return new TSTranspileError(
        errorMessage,
        pathToFile,
        diagnostics,
        { context }
      )
    };
  });

  it('creates an error with a correct type', () => {
    const tsError = createTSTranspileError();

    expect(tsError).toBeInstanceOf(TSTranspileError);
    expect(tsError).toBeInstanceOf(TSError);
    expect(tsError).toBeInstanceOf(CustomError);
    expect(tsError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const tsError = createTSTranspileError();

    expect(tsError.message).toBe(errorMessage);
  });

  it('creates an error with a correct name', () => {
    const tsError = createTSTranspileError();

    expect(tsError.name).toBe('TSTranspileError');
  });

  it('creates an error with a correct pathToFile', () => {
    const tsError = createTSTranspileError();

    expect(tsError.pathToFile).toBe(pathToFile);
  });

  it('creates an error with a correct diagnostics', () => {
    const tsError = createTSTranspileError();

    expect(tsError.diagnostics).toEqual(diagnostics);
  });

  it('create an error with correct serialization data', () => {
    const tsError = createTSTranspileError();

    const expectedSerializedData = {
      error: {
        message: errorMessage,
        type: TSErrorType.TS_TRANSPILE_ERROR,
        diagnostics,
        context,
      }
    };

    expect(JSON.stringify(tsError)).toBe(JSON.stringify(expectedSerializedData));
  });
});
