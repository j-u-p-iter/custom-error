import { SyntaxErrorType } from '../types';
import { InvalidJsonError } from '.';

describe('InvalidJsonError', () => {
  it('creates an error with a correct message', () => {
    const invalidJsonError = new InvalidJsonError('path/to/file.json');

    expect(invalidJsonError.message).toBe('JSON data in "path/to/file.json" is not valid');
  });

  it('creates an error with a correct name', () => {
    const invalidJsonError = new InvalidJsonError('path/to/file.json');

    expect(invalidJsonError.name).toBe('InvalidJsonError');
  });

  it('creates an error with a correct context', () => {
    const invalidJsonError = new InvalidJsonError('path/to/file.json', { context: 'JsonDatabase' });

    expect(invalidJsonError.context).toBe('JsonDatabase');
  });

  it('create an error with correct serialization data', () => {
    const invalidJsonError = new InvalidJsonError('path/to/file.json', { context: 'JsonDatabase' });

    const expectedSerializedData = {
      error: {
        message: 'JSON data in "path/to/file.json" is not valid',
        type: SyntaxErrorType.INVALID_JSON_ERROR,
        invalidJsonPath: 'path/to/file.json',
        context: 'JsonDatabase',
      }
    };

    expect(invalidJsonError.serialize()).toEqual(expectedSerializedData);
  });
});
