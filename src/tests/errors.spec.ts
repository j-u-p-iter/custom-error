import { 
  BadRequestError,  
  InvalidJsonError,  
  InvalidEmailError,  
  InvalidFileTypeError,  
  InvalidPathError,  
  PropertyIsRequiredError,  
  TSParseError,
  TSTranspileError,
  TypesError,
  CommonHttpError,
  URLError,
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
    expect(TSTranspileError).toBeDefined();
    expect(TypesError).toBeDefined();
    expect(CommonHttpError).toBeDefined();
    expect(URLError).toBeDefined();
  });
});
