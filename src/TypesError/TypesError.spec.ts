import { TypesError } from '.'; 
import { CustomError } from '../CustomError';
import { stringifyAndParse } from '../tests';

describe('TypesError', () => {
  let createTypesError;
  let errorMessage;
  let context;
  let identifierName;
  let expectedType;
  let invalidType;

  beforeAll(() => {
    errorMessage = 'Some error message';
    context = 'UsersService';
    identifierName = 'input';
    expectedType = 'number';
    invalidType = 'string';

    createTypesError = () => {
      return new TypesError(
        errorMessage,
        {
          identifierName,
          expectedType,
          invalidType,
        },
        { context }
      )
    };
  });

  it('creates an error with a correct type', () => {
    const typesError = createTypesError();

    expect(typesError).toBeInstanceOf(TypesError);
    expect(typesError).toBeInstanceOf(CustomError);
    expect(typesError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const typesError = createTypesError();

    expect(typesError.message).toBe(errorMessage);
  });

  it('creates an error with a correct name', () => {
    const typesError = createTypesError();

    expect(typesError.name).toBe('TypesError');
  });

  it('creates an error with a correct identifierName', () => {
    const typesError = createTypesError();

    expect(typesError.identifierName).toBe(identifierName);
  });

  it('creates an error with a correct expectedType', () => {
    const typesError = createTypesError();

    expect(typesError.expectedType).toBe(expectedType);
  });

  it('create an error with a correct invalidType', () => {
    const typesError = createTypesError();

    const expectedSerializedData = {
      error: {
        message: errorMessage,
        context,
        type: 'TypesError',
        identifierName,
        expectedType,
        invalidType,
      }
    };

    expect(stringifyAndParse(typesError)).toEqual(expectedSerializedData);
  });
});
