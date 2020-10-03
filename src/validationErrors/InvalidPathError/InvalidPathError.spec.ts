import { HttpStatus } from '@j.u.p.iter/http-status';

import { ValidationError } from '../ValidationError';
import { CustomError } from '../../CustomError';
import { ValidationErrorType } from '../types';
import { InvalidPathError } from '.';

describe('InvalidPathError', () => {
  it('creates an error with a correct type', () => {
    const invalidPathError = new InvalidPathError('/path/to/directory');

    expect(invalidPathError).toBeInstanceOf(InvalidPathError);
    expect(invalidPathError).toBeInstanceOf(ValidationError);
    expect(invalidPathError).toBeInstanceOf(CustomError);
    expect(invalidPathError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const invalidFilePathError = new InvalidPathError('/path/to/file.json');

    expect(invalidFilePathError.message).toBe('File /path/to/file.json does not exist');

    const invalidDirectoryPathError = new InvalidPathError('/path/to/directory');

    expect(invalidDirectoryPathError.message).toBe('Directory /path/to/directory does not exist');
  });

  it('creates an error with a correct name', () => {
    const invalidPathError = new InvalidPathError('/path/to/file.json');

    expect(invalidPathError.name).toBe('InvalidPathError');
  });

  it('creates an error with a correct code', () => {
    const invalidPathError = new InvalidPathError('/path/to/file.json');

    expect(invalidPathError.code).toBe(HttpStatus.BAD_REQUEST);
  });

  it('creates an error with a correct context', () => {
    const invalidPathError = new InvalidPathError('/path/to/file.json', { context: 'UsersService' });

    expect(invalidPathError.context).toBe('UsersService');
  });

  it('create an error with correct serialization data', () => {
    const invalidPathError = new InvalidPathError('/path/to/file.json', { context: 'UsersService' });

    const expectedSerializedData = {
      error: {
        message: 'File /path/to/file.json does not exist',
        type: ValidationErrorType.INVALID_PATH_ERROR,
        invalidPath: '/path/to/file.json',
        context: 'UsersService',
      }
    };

    expect(invalidPathError.serialize()).toEqual(expectedSerializedData);
  });
});
