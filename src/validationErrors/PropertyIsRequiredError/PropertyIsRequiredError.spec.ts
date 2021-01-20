import { HttpStatus } from '@j.u.p.iter/http-status';

import { ValidationError } from '../ValidationError';
import { CustomError } from '../../CustomError';
import { ValidationErrorType } from '../types';
import { PropertyIsRequiredError } from '.';

describe('PropertyIsRequiredError', () => {
  let createPropertyIsRequiredError;
  let requiredProperty;
  let context;

  beforeAll(() => {
    requiredProperty = 'name';
    context = 'UsersService';

    createPropertyIsRequiredError = () => {
      return new PropertyIsRequiredError(requiredProperty, { context });
    }
  });

  it('creates an error with a correct type', () => {
    const propertyIsRequiredError = createPropertyIsRequiredError();

    expect(propertyIsRequiredError).toBeInstanceOf(PropertyIsRequiredError);
    expect(propertyIsRequiredError).toBeInstanceOf(ValidationError);
    expect(propertyIsRequiredError).toBeInstanceOf(CustomError);
    expect(propertyIsRequiredError).toBeInstanceOf(Error);
  });

  it('creates an error with a correct message', () => {
    const propertyIsRequiredError = createPropertyIsRequiredError();

    expect(propertyIsRequiredError.message).toBe('Property name is not found');
  });

  it('creates an error with a correct name', () => {
    const propertyIsRequiredError = createPropertyIsRequiredError();

    expect(propertyIsRequiredError.name).toBe('PropertyIsRequiredError');
  });

  it('creates an error with a correct code', () => {
    const propertyIsRequiredError = createPropertyIsRequiredError();

    expect(propertyIsRequiredError.code).toBe(HttpStatus.BAD_REQUEST);
  });

  it('creates an error with a correct context', () => {
    const propertyIsRequiredError = createPropertyIsRequiredError();

    expect(propertyIsRequiredError.context).toBe(context);
  });

  it('create an error with correct serialization data', () => {
    const propertyIsRequiredError = createPropertyIsRequiredError();

    const expectedSerializedData = {
      error: {
        context,
        message: 'Property name is not found',
        type: ValidationErrorType.PROPERTY_IS_REQUIRED_ERROR,
        property: requiredProperty,
      }
    }

    expect(propertyIsRequiredError.serialize()).toEqual(expectedSerializedData)
  });
});
