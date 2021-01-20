import { 
  BadRequestError,  
  InvalidJsonError,  
  InvalidEmailError,  
  InvalidFileTypeError,  
  InvalidPathError,  
  PropertyIsRequiredError,  
  TSParseError,
} from '../.';

describe('errors', () => {
  it('exported properly', () => {
    expect(BadRequestError).toBeDefined();
    expect(InvalidJsonError).toBeDefined();
    expect(InvalidEmailError).toBeDefined();
    expect(InvalidPathError).toBeDefined();
    expect(PropertyIsRequiredError).toBeDefined();
    expect(InvalidFileTypeError).toBeDefined();
    expect(TSParseError).toBeDefined();
  });
});
