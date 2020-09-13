import { HttpStatus } from '@j.u.p.iter/http-status';

import { HttpErrorType } from '../HttpError';
import { BadRequestError } from '.';

describe('BadRequestError', () => {
  let errorMessage;
  let context;

  beforeAll(() => {
    errorMessage = 'Users data is not correct';
    context = 'UsersService';
  });

  it('creates an error with a correct message', () => {
    const badRequestError = new BadRequestError(errorMessage);

    expect(badRequestError.message).toBe(errorMessage);
  });

  it('creates an error with a correct name', () => {
    const badRequestError = new BadRequestError(errorMessage);

    expect(badRequestError.name).toBe('BadRequestError');
  });

  it('creates an error with a correct code', () => {
    const badRequestError = new BadRequestError(errorMessage);

    expect(badRequestError.code).toBe(HttpStatus.BAD_REQUEST);
  });

  it('creates an error with a correct context', () => {
    const badRequestError = new BadRequestError(errorMessage, { context });

    expect(badRequestError.context).toBe(context);
  });

  it('create an error with correct serialization data', () => {
    const badRequestError = new BadRequestError(errorMessage, { context });

    const expectedSerializedData = {
      error: {
        context,
        message: errorMessage,
        type: HttpErrorType.BAD_REQUEST_ERROR,
      }
    };

    expect(badRequestError.serialize()).toEqual(expectedSerializedData);
  });
});
