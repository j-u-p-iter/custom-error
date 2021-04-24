import { HttpStatus } from '@j.u.p.iter/http-status';

import { ValidationError } from '../ValidationError';
import { CustomError } from '../../CustomError';
import { ValidationErrorType } from '../types';
import { InvalidPathError } from '.';

describe('InvalidPathError', () => {
  let createInvalidPathError;

  let invalidPathToFile;
  let invalidPathToDirectory;
  let context;

  beforeAll(() => {
    invalidPathToFile = '/path/to/file.json';
    invalidPathToDirectory = '/path/to/directory';
    context = 'UsersService';

    createInvalidPathError = (invalidPath = invalidPathToFile, isFile = true) => {
      return new InvalidPathError(invalidPath, isFile, { context });
    }
  });

  it('creates an error with a correct type', () => {
    const invalidPathError = createInvalidPathError();

    expect(invalidPathError).toBeInstanceOf(InvalidPathError);
    expect(invalidPathError).toBeInstanceOf(ValidationError);
    expect(invalidPathError).toBeInstanceOf(CustomError);
    expect(invalidPathError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    let invalidFilePathError = createInvalidPathError();

    expect(invalidFilePathError.message).toBe(`File ${invalidPathToFile} does not exist`);

    invalidFilePathError = createInvalidPathError(invalidPathToDirectory, false);

    expect(invalidFilePathError.message).toBe(`Directory ${invalidPathToDirectory} does not exist`);
  });

  it('creates an error with a correct name', () => {
    const invalidPathError = createInvalidPathError();

    expect(invalidPathError.name).toBe('InvalidPathError');
  });

  it('creates an error with a correct code', () => {
    const invalidPathError = createInvalidPathError();

    expect(invalidPathError.code).toBe(HttpStatus.BAD_REQUEST);
  });

  it('creates an error with a correct context', () => {
    const invalidPathError = createInvalidPathError();

    expect(invalidPathError.context).toBe('UsersService');
  });

  it('create an error with correct serialization data', () => {
    const invalidPathError = createInvalidPathError();

    const expectedSerializedData = {
      error: {
        context,
        invalidPath: invalidPathToFile,
        message: `File ${invalidPathToFile} does not exist`,
        type: ValidationErrorType.INVALID_PATH_ERROR,
      }
    };

    expect(invalidPathError.serialize()).toEqual(expectedSerializedData);
  });
});
