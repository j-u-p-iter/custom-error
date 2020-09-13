import { HttpStatus } from '@j.u.p.iter/http-status';

import { ValidationErrorType } from '../ValidationError';
import { PropertyIsRequiredError } from '.';

describe('PropertyIsRequiredError', () => {
  it('creates an error with a correct message', () => {
    const propertyIsRequiredError = new PropertyIsRequiredError('name');

    expect(propertyIsRequiredError.message).toBe('Property name is not found');
  });

  it('creates an error with a correct name', () => {
    const propertyIsRequiredError = new PropertyIsRequiredError('name');

    expect(propertyIsRequiredError.name).toBe('PropertyIsRequiredError');
  });

  it('creates an error with a correct code', () => {
    const propertyIsRequiredError = new PropertyIsRequiredError('name');

    expect(propertyIsRequiredError.code).toBe(HttpStatus.BAD_REQUEST);
  });

  it('creates an error with a correct context', () => {
    const propertyIsRequiredError = new PropertyIsRequiredError('name', { context: 'UploadService' });

    expect(propertyIsRequiredError.context).toBe('UploadService');
  });

  it('create an error with correct serialization data', () => {
    const propertyIsRequiredError = new PropertyIsRequiredError('name', { context: 'UploadService' });

    const expectedSerializedData = {
      error: {
        message: 'Property name is not found',
        type: ValidationErrorType.PROPERTY_IS_REQUIRED_ERROR,
        property: 'name',
        context: 'UploadService',
      }
    }

    expect(propertyIsRequiredError.serialize()).toEqual(expectedSerializedData)
  });
});
