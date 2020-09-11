import { PropertyIsRequiredError } from './PropertyIsRequiredError';

describe('PropertyIsRequiredError', () => {
  it('create correct error', () => {
    const propertyIsRequiredError = new PropertyIsRequiredError('name');

    expect(propertyIsRequiredError.message).toBe('Property name is not found');
  });
});
