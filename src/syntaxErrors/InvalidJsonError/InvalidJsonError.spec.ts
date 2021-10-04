import { SyntaxErrorType } from '../types';
import { InvalidJsonError } from '.';
import { SyntxError } from '../SyntxError';
import { CustomError } from '../../CustomError';
import { stringifyAndParse } from '../../tests';

describe('InvalidJsonError', () => {
  let createInvalidJsonError;
  let pathToJson;
  let context;

  beforeAll(() => {
    pathToJson = 'path/to/file.json';
    context = 'JsonDatabase';

    createInvalidJsonError = () => {
      return new InvalidJsonError(
        pathToJson, 
        { context }
      );
    }
  });

  it('creates an error with a correct type', () => {
    const invalidJsonError = createInvalidJsonError();

    expect(invalidJsonError).toBeInstanceOf(InvalidJsonError);
    expect(invalidJsonError).toBeInstanceOf(SyntxError);
    expect(invalidJsonError).toBeInstanceOf(CustomError);
    expect(invalidJsonError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const invalidJsonError = createInvalidJsonError();

    expect(invalidJsonError.message).toBe('JSON data in "path/to/file.json" is not valid');
  });

  it('creates an error with a correct name', () => {
    const invalidJsonError = createInvalidJsonError();

    expect(invalidJsonError.name).toBe('InvalidJsonError');
  });

  it('creates an error with a correct context', () => {
    const invalidJsonError = createInvalidJsonError();

    expect(invalidJsonError.context).toBe('JsonDatabase');
  });

  it('create an error with correct serialization data', () => {
    const invalidJsonError = createInvalidJsonError();

    const expectedSerializedData = {
      error: {
        message: 'JSON data in "path/to/file.json" is not valid',
        type: SyntaxErrorType.INVALID_JSON_ERROR,
        invalidJsonPath: 'path/to/file.json',
        context: 'JsonDatabase',
      }
    };

    expect(stringifyAndParse(invalidJsonError)).toEqual(expectedSerializedData);
  });
});
