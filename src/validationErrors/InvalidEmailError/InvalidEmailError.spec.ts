import { HttpStatus } from '@j.u.p.iter/http-status';

import { ValidationErrorType } from '../ValidationError';
import { InvalidEmailError } from './InvalidEmailError';

describe('InvalidEmailError', () => {
  it('creates an error with a correct message', () => {
    const invalidEmailError = new InvalidEmailError('some@email.com');

    expect(invalidEmailError.message).toBe('Email some@email.com is not valid');
  });

  it('creates an error with a correct name', () => {
    const invalidEmailError = new InvalidEmailError('some@email.com');

    expect(invalidEmailError.name).toBe('InvalidEmailError');
  });

  it('creates an error with a correct code', () => {
    const invalidEmailError = new InvalidEmailError('some@email.com');

    expect(invalidEmailError.code).toBe(HttpStatus.BAD_REQUEST);
  });

  it('creates an error with a correct context', () => {
    const invalidEmailError = new InvalidEmailError('some@email.com', { context: 'UsersService' });

    expect(invalidEmailError.context).toBe('UsersService');
  });

  it('create an error with correct serialization data', () => {
    const invalidEmailError = new InvalidEmailError('some@email.com', { context: 'UsersService' });

    const expectedSerializedData = {
      error: {
        message: 'Email some@email.com is not valid',
        type: ValidationErrorType.INVALID_EMAIL_ERROR,
        invalidEmail: 'some@email.com',
        context: 'UsersService',
      }
    };

    expect(invalidEmailError.serialize()).toEqual(expectedSerializedData);
  });
});
