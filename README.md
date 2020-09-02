# CustomError

## Introduction
There're different types of possible errors, that can happen on server and client sides.

Examples of such types of errors:
- system error;
- syntax error;
- validation error.

Most of them should be caught on our side not to break our program. But there're some types of errors, that should stop a program.

There’s a syntax construct `try..catch` that allows us to “catch” errors so the script can continue execution.

Such errors are called “runtime errors” or, sometimes, “exceptions”.

If an exception happens in “scheduled” code, like in setTimeout, then try..catch won’t catch it. That’s because the function itself is executed later, when the engine has already left the try..catch construct. To catch an exception inside a scheduled function, try..catch must be inside that function.

When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch. Such object is called `error object`.

## Error object

For all built-in errors, the error object has two main properties:

`name`. Error name. For instance, for an undefined variable that’s "ReferenceError".

`message`. Textual message about error details.

There are other non-standard properties available in most environments. One of most widely used and supported is:

`stack`. Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.

## "throw" operator

The throw operator generates an error.

Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).

For built-in errors (not for any objects, just for errors), the name property is exactly the name of the constructor. And message is taken from the argument.

## Global catch

Let’s imagine we’ve got a fatal error outside of try..catch, and the script stops execution. Like a programming error or some other terrible thing.

Is there a way to react on such occurrences? We may want to log the error, show something to the user (normally they don’t see error messages), etc.

Different environments usually provide the way to handle such type of uncaught errors:

- Node.js has `process.on("uncaughtException")` for that.
- And in the browser we can assign a function to the special `window.onerror` property.

## Problem

We handle all error cases similarly, using one common Error class. As result in logs all these errors looks absolutely the same, that requires from us spend 
additional time to detect the reason of an issue.

## Solution

We can create custom classes for all main categories of errors:
- for errors in network operations we may need `HttpError`;
- for database operations `DbError`;
- for searching operations `NotFoundError` and so on.

When we create custom error classes, we:
- get much more descriptive errors. With such types of errors it's much easier to detect the reason and the place of an error;
- handle errors more carefully, that will allow us to understand code we write much better.

## Requirements for Custom Errors

- custom errors should extend from base Error class. We should be able to detect them by `instanceof Error`
- custom errors should support basic error properties, base Error class supports: `message`, `name`, `stack`
- custom errors shouldn't contain in stack internal implementation details, like CustomError class or functions-creators we can use to create custom class instances.
- custom errors should be extendable. For this purpose we should be able

Our errors should support basic error properties like `message`, `name` and, preferably, `stack`. But they also may have other properties of their own, e.g. `HttpError` objects may have a `statusCode` property with a value like 404 or 403 or 500.

JavaScript allows to use throw with any argument, so technically our custom error classes don’t need to inherit from `Error`. But if we inherit, then it becomes possible to use obj instanceof Error to identify error objects. So it’s better to inherit from it.

As the application grows, our own errors naturally form a hierarchy. For instance, HttpTimeoutError may inherit from HttpError, and so on.
