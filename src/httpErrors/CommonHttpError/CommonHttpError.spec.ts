import { HttpStatus } from "@j.u.p.iter/http-status";
import { CommonHttpError } from '.'; 
import { CustomError } from '../../CustomError';
import { HttpError } from '../HttpError';
import { stringifyAndParse } from '../../tests';

describe('CommonHttpError', () => {
  let createHttpError;
  let errorMessage;
  let context;
  let request
  let response;
  let code;

  beforeAll(() => {
    errorMessage = 'Some error message';
    context = 'UsersService';
    code = HttpStatus.BAD_REQUEST;
    request = { type: 'request' };
    response = { type: 'response' };

    createHttpError = () => {
      return new CommonHttpError(
        errorMessage,
        {
          code,
          request,
          response
        },
        { context }
      )
    };
  });

  it('creates an error with a correct type', () => {
    const httpError = createHttpError();

    expect(httpError).toBeInstanceOf(CommonHttpError);
    expect(httpError).toBeInstanceOf(HttpError);
    expect(httpError).toBeInstanceOf(CustomError);
    expect(httpError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const httpError = createHttpError();

    expect(httpError.message).toBe(errorMessage);
  });

  it('creates an error with a correct name', () => {
    const httpError = createHttpError();

    expect(httpError.name).toBe('CommonHttpError');
  });

  it('creates an error with a correct code', () => {
    const httpError = createHttpError();

    expect(httpError.code).toBe(code);
  });

  it('creates an error with a correct request', () => {
    const httpError = createHttpError();

    expect(httpError.request).toEqual(request);
  });

  it('creates an error with a correct response', () => {
    const httpError = createHttpError();

    expect(httpError.response).toEqual(response);
  });

  it('create an error with a correct invalidType', () => {
    const httpError = createHttpError();

    const expectedSerializedData = {
      error: {
        message: errorMessage,
        context,
        type: 'HTTPError',
        request,
        response,
        code,
      }
    };

    expect(stringifyAndParse(httpError)).toEqual(expectedSerializedData);
  });
});
