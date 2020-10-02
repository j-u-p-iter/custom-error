import { 
  BadRequestError,  
  InvalidJsonError,  
  InvalidEmailError,  
  InvalidFileTypeError,  
  PropertyIsRequiredError,  
} from '../.';

describe('errors', () => {
  it('exported properly', () => {
    expect(BadRequestError).toBeDefined();
    expect(InvalidJsonError).toBeDefined();
    expect(InvalidEmailError).toBeDefined();
    expect(PropertyIsRequiredError).toBeDefined();
    expect(InvalidFileTypeError).toBeDefined();
  });
});
