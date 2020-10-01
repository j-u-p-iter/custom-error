import { 
  BadRequestError,  
  InvalidJsonError,  
  InvalidEmailError,  
  PropertyIsRequiredError,  
} from '../.';

describe('errors', () => {
  it('exported properly', () => {
    expect(BadRequestError).toBeDefined();
    expect(InvalidJsonError).toBeDefined();
    expect(InvalidEmailError).toBeDefined();
    expect(PropertyIsRequiredError).toBeDefined();
  });
});
