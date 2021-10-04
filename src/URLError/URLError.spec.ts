import { URLError } from '.'; 
import { CustomError } from '../CustomError';
import { stringifyAndParse } from '../tests';

describe('URLError', () => {
  let createURLError;
  let errorMessage;
  let context;
  let invalidURL;

  beforeAll(() => {
    errorMessage = 'Some error message';
    context = 'UsersService';
    invalidURL = 'invalidURL';

    createURLError = () => {
      return new URLError(
        errorMessage,
        invalidURL,
        { context }
      )
    };
  });

  it('creates an error with a correct type', () => {
    const urlError = createURLError();

    expect(urlError).toBeInstanceOf(URLError);
    expect(urlError).toBeInstanceOf(CustomError);
    expect(urlError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const urlError = createURLError();

    expect(urlError.message).toBe(errorMessage);
  });

  it('creates an error with a correct name', () => {
    const urlError = createURLError();

    expect(urlError.name).toBe('URLError');
  });

  it('creates an error with a correct invalidURL', () => {
    const urlError = createURLError();

    expect(urlError.invalidURL).toBe(invalidURL);
  });

  it('create an error with correct serialization data', () => {
    const urlError = createURLError();

    const expectedSerializedData = {
      error: {
        message: errorMessage,
        context,
        type: 'URLError',
        invalidURL,
      }
    };

    expect(stringifyAndParse(urlError)).toEqual(expectedSerializedData);
  });
});
