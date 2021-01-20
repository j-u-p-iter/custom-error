import { HttpStatus } from '@j.u.p.iter/http-status';

import { ValidationError } from '../ValidationError';
import { CustomError } from '../../CustomError';
import { ValidationErrorType } from '../types';
import { InvalidFileTypeError } from '.';

describe('InvalidFileTypeError', () => {
  let createInvalidFileTypeError;
  let invalidExtension;
  let requiredExtension;
  let context;

  beforeAll(() => {
    invalidExtension = '.txt';
    requiredExtension = '.json';
    context = 'JsonDB';

    createInvalidFileTypeError = () => {
      return new InvalidFileTypeError(
        invalidExtension, 
        requiredExtension,
        { context }
      );
    }
  });

  it('creates an error with a correct type', () => {
    const invalidFileTypeError = createInvalidFileTypeError();

    expect(invalidFileTypeError).toBeInstanceOf(InvalidFileTypeError);
    expect(invalidFileTypeError).toBeInstanceOf(ValidationError);
    expect(invalidFileTypeError).toBeInstanceOf(CustomError);
    expect(invalidFileTypeError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const invalidFileTypeError = createInvalidFileTypeError();

    expect(invalidFileTypeError.message).toBe('.txt file is not allowed. Instead you should use a .json file.');
  });

  it('creates an error with a correct name', () => {
    const invalidFileTypeError = createInvalidFileTypeError();

    expect(invalidFileTypeError.name).toBe('InvalidFileTypeError');
  });

  it('creates an error with a correct code', () => {
    const invalidFileTypeError = createInvalidFileTypeError();

    expect(invalidFileTypeError.code).toBe(HttpStatus.BAD_REQUEST);
  });

  it('creates an error with a correct context', () => {
    const invalidFileTypeError = createInvalidFileTypeError();

    expect(invalidFileTypeError.context).toBe('JsonDB');
  });

  it('create an error with correct serialization data', () => {
    const invalidFileTypeError = createInvalidFileTypeError();

    const expectedSerializedData = {
      error: {
        message: '.txt file is not allowed. Instead you should use a .json file.',
        type: ValidationErrorType.INVALID_FILE_TYPE_ERROR,
        invalidExtension: '.txt',
        requiredExtension: '.json',
        context: 'JsonDB',
      }
    };

    expect(invalidFileTypeError.serialize()).toEqual(expectedSerializedData);
  });
});
