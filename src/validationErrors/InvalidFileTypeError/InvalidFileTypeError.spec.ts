import { HttpStatus } from '@j.u.p.iter/http-status';

import { ValidationError } from '../ValidationError';
import { CustomError } from '../../CustomError';
import { ValidationErrorType } from '../types';
import { InvalidFileTypeError } from '.';

describe('InvalidFileTypeError', () => {
  it('creates an error with a correct type', () => {
    const invalidFileTypeError = new InvalidFileTypeError('.txt', '.json');

    expect(invalidFileTypeError).toBeInstanceOf(InvalidFileTypeError);
    expect(invalidFileTypeError).toBeInstanceOf(ValidationError);
    expect(invalidFileTypeError).toBeInstanceOf(CustomError);
    expect(invalidFileTypeError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const invalidFileTypeError = new InvalidFileTypeError('.txt', '.json');

    expect(invalidFileTypeError.message).toBe('.txt file is not allowed. Instead you should use a .json file.');
  });

  it('creates an error with a correct name', () => {
    const invalidFileTypeError = new InvalidFileTypeError('.txt', '.json');

    expect(invalidFileTypeError.name).toBe('InvalidFileTypeError');
  });

  it('creates an error with a correct code', () => {
    const invalidFileTypeError = new InvalidFileTypeError('.txt', '.json');

    expect(invalidFileTypeError.code).toBe(HttpStatus.BAD_REQUEST);
  });

  it('creates an error with a correct context', () => {
    const invalidFileTypeError = new InvalidFileTypeError('.txt', '.json', { context: 'JsonDB' });

    expect(invalidFileTypeError.context).toBe('JsonDB');
  });

  it('create an error with correct serialization data', () => {
    const invalidFileTypeError = new InvalidFileTypeError('.txt', '.json', { context: 'UsersService' });

    const expectedSerializedData = {
      error: {
        message: '.txt file is not allowed. Instead you should use a .json file.',
        type: ValidationErrorType.INVALID_FILE_TYPE_ERROR,
        invalidExtension: '.txt',
        requiredExtension: '.json',
        context: 'UsersService',
      }
    };

    expect(invalidFileTypeError.serialize()).toEqual(expectedSerializedData);
  });
});
