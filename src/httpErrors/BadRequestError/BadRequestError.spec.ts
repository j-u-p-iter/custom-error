import { HttpStatus } from '@j.u.p.iter/http-status';

import { BadRequestError } from '.';
import { HttpError } from '../HttpError';
import { CustomError } from '../../CustomError';
import { HttpErrorType } from '../types';

describe('BadRequestError', () => {
  let createBadRequestError;
  let errorMessage;
  let context;

  beforeAll(() => {
    errorMessage = 'Some error message';  
    context = 'UserService';

    createBadRequestError = () => {
      return new BadRequestError(errorMessage, { context });
    }
  });

  it('creates an error with a correct type', () => {
    const badRequestError = createBadRequestError();

    expect(badRequestError).toBeInstanceOf(BadRequestError);
    expect(badRequestError).toBeInstanceOf(HttpError);
    expect(badRequestError).toBeInstanceOf(CustomError);
    expect(badRequestError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const badRequestError = createBadRequestError();

    expect(badRequestError.message).toBe(errorMessage);
  });

  it('creates an error with a correct name', () => {
    const badRequestError = createBadRequestError();

    expect(badRequestError.name).toBe('BadRequestError');
  });

  it('creates an error with a correct code', () => {
    const badRequestError = createBadRequestError();

    expect(badRequestError.code).toBe(HttpStatus.BAD_REQUEST);
  });

  it('creates an error with a correct context', () => {
    const badRequestError = createBadRequestError();

    expect(badRequestError.context).toBe(context);
  });

  it('create an error with correct serialization data', () => {
    const badRequestError = createBadRequestError();

    const expectedSerializedData = {
      error: {
        message: errorMessage,
        type: HttpErrorType.BAD_REQUEST_ERROR,
        context,
      }
    };

    expect(JSON.stringify(badRequestError)).toBe(JSON.stringify(expectedSerializedData));
  });
});
