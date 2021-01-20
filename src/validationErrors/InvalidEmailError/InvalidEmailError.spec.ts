import { HttpStatus } from '@j.u.p.iter/http-status';

import { ValidationError } from '../ValidationError';
import { CustomError } from '../../CustomError';
import { ValidationErrorType } from '../types';
import { InvalidEmailError } from '.';

describe('InvalidEmailError', () => {
  let createInvalidEmailError;
  let invalidEmail;
  let context;

  beforeAll(() => {
    invalidEmail = 'some@email';
    context = 'UsersService';

    createInvalidEmailError = () => {
      return new InvalidEmailError(
        invalidEmail, 
        { context }
      );
    }
  });

  it('creates an error with a correct type', () => {
    const invalidEmailError = createInvalidEmailError();

    expect(invalidEmailError).toBeInstanceOf(InvalidEmailError);
    expect(invalidEmailError).toBeInstanceOf(ValidationError);
    expect(invalidEmailError).toBeInstanceOf(CustomError);
    expect(invalidEmailError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const invalidEmailError = createInvalidEmailError();

    expect(invalidEmailError.message).toBe(`Email ${invalidEmail} is not valid`);
  });

  it('creates an error with a correct name', () => {
    const invalidEmailError = createInvalidEmailError();

    expect(invalidEmailError.name).toBe('InvalidEmailError');
  });

  it('creates an error with a correct code', () => {
    const invalidEmailError = createInvalidEmailError();

    expect(invalidEmailError.code).toBe(HttpStatus.BAD_REQUEST);
  });

  it('creates an error with a correct context', () => {
    const invalidEmailError = createInvalidEmailError();

    expect(invalidEmailError.context).toBe('UsersService');
  });

  it('create an error with correct serialization data', () => {
    const invalidEmailError = createInvalidEmailError();

    const expectedSerializedData = {
      error: {
        invalidEmail,
        context,
        message: `Email ${invalidEmail} is not valid`,
        type: ValidationErrorType.INVALID_EMAIL_ERROR,
      }
    };

    expect(invalidEmailError.serialize()).toEqual(expectedSerializedData);
  });
});
