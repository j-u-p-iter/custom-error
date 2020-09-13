## Classes

<dl>
<dt><a href="#BadRequestError">BadRequestError</a></dt>
<dd></dd>
<dt><a href="#PropertyIsRequiredError">PropertyIsRequiredError</a></dt>
<dd></dd>
<dt><a href="#InvalidEmailError">InvalidEmailError</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#CustomError">CustomError</a></dt>
<dd><p>Create a CustomError object</p>
</dd>
</dl>

<a name="BadRequestError"></a>

## BadRequestError
**Kind**: global class  
<a name="new_BadRequestError_new"></a>

### new BadRequestError(message, [config])
Create a BadRequestError object


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | An error message |
| [config] | <code>object</code> | A configuration object |
| [config.context] | <code>string</code> | The location, where error has happened   (like "UsersService", "UploadService" and etc.). |

**Example**  
```js
const badRequestError = new BadRequestError('Users request data is not correct', { context: 'UsersService' });
```
<a name="PropertyIsRequiredError"></a>

## PropertyIsRequiredError
**Kind**: global class  
<a name="new_PropertyIsRequiredError_new"></a>

### new PropertyIsRequiredError(message, [config])
Create a PropertyIsRequiredError object


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | An error message |
| [config] | <code>object</code> | A configuration object |
| [config.context] | <code>string</code> | The location, where error has happened   (like "UsersService", "UploadService" and etc.). |

**Example**  
```js
const propertyIsRequiredError = new PropertyIsRequiredError('photoURL', { context: 'UploadService' });
```
<a name="InvalidEmailError"></a>

## InvalidEmailError
**Kind**: global class  
<a name="new_InvalidEmailError_new"></a>

### new InvalidEmailError(message, [config])
Create a InvalidEmailError object


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | An error message |
| [config] | <code>object</code> | A configuration object |
| [config.context] | <code>string</code> | The location, where error has happened   (like "UsersService", "UploadService" and etc.). |

**Example**  
```js
const invalidEmailError = new InvalidEmailError('invalidEmail', { context: 'UsersService' });
```
<a name="CustomError"></a>

## *CustomError*
Create a CustomError object

**Kind**: global abstract variable  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | An error message |
| [config] | <code>object</code> | A configuration object |
| [config.code] | <code>number</code> | HTTP status code. |
| [config.context] | <code>string</code> | The location, where error has happened (like "UsersService", "UploadService" and etc.). |
| [config.property] | <code>string</code> | The invalid property name.   [Available HTTP status codes](https://github.com/j-u-p-iter/http-status/blob/master/docs/API.md) |
| [config.excludeFromStack] | <code>function</code> | A callback you need to exclude from the result stack. |

**Example**  
```js
new CustomError('Some error has happened');
```
