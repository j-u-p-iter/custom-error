## Classes

<dl>
<dt><a href="#CustomError">CustomError</a></dt>
<dd></dd>
<dt><a href="#PropertyIsRequiredError">PropertyIsRequiredError</a></dt>
<dd></dd>
</dl>

<a name="CustomError"></a>

## CustomError
**Kind**: global class  
<a name="new_CustomError_new"></a>

### new CustomError(message, [config])
Create a CustomError object


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
