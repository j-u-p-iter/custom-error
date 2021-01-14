## How to add new Custom Error

### Decide, what category the new error belongs to.

There're a lot of possible categories of errors:
- `Http Error`;
- `Db Error`;
- `Not Found Error`; 
- `Validation Error`;
- `Syntax Error`.

These errors categories can be also splitted on different types.

For example there're next types of the `Http Error`:

- Bad Request Error type;
- Not Found Error type.

and etc.

`Validation Error` can be represented with next types:

- Invalid Email Error;
- Invalid File Type Error;
- Invalid Path Error;
- Property Is Required Error.

Let's say the error belongs to ValidationError category and has Invalid Email type.

So, at first we need to create ValidationError class, that will represent the error category class.

Each error category has it's own folder in the /src folder with the name, similar to the category name. 
So, if our category is called `ValidationError`, the appropriate folder should be called `validationErrors`.

In `srs/validationsErrors` folder we should create `ValidationError.ts` file, that will contain the error category class. 

It should look like this:

```typescript
import { HttpStatus } from "@j.u.p.iter/http-status";

import { BaseErrorConfig, CustomError } from "../CustomError";

/**
 * ValidationError knows about
 * all properties child objects have.
 *
 */
interface ValidationErrorConfig extends BaseErrorConfig {
  invalidEmail?: string;
}

export class ValidationError extends CustomError {
  constructor(message: string, config: ValidationErrorConfig = {}) {
    super(message, { ...config, code: HttpStatus.BAD_REQUEST });

    this.name = "ValidationError";

    Object.setPrototypeOf(this, ValidationError.prototype)
  }
}
```

Let's explain here, what is happening here step by step:

1. We import `HttpStatus` module. We make an assumption, that the ValidationError category errors will be used on both sides - server and client.
For this purpose we're going to create 
