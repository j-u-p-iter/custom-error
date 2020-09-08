## Classes

<dl>
<dt><a href="#CustomError">CustomError</a></dt>
<dd></dd>
<dt><a href="#HTTPError">HTTPError</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#HTTPErrors">HTTPErrors</a> : <code>object</code></dt>
<dd><p>Contains factories for the common HTTP errors</p>
</dd>
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
| [config.code] | <code>number</code> | HTTP status code.   [Available HTTP status codes](https://github.com/j-u-p-iter/http-status/blob/master/docs/API.md) |
| [config.excludeFromStack] | <code>function</code> | A callback you need to exclude from the result stack. |

**Example**  
```js
new CustomError('Some error has happened');
```
<a name="HTTPError"></a>

## HTTPError
**Kind**: global class  
<a name="new_HTTPError_new"></a>

### new HTTPError(message, [config])
Create a custom HTTPError object related to the appropriate HTTP errors


| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | An error message |
| [config] | <code>object</code> | A configuration object |
| [config.code] | <code>number</code> | HTTP status code.   [Available HTTP status codes](https://github.com/j-u-p-iter/http-status/blob/master/docs/API.md) |
| [config.excludeFromStack] | <code>function</code> | A callback you need to exclude from the result stack. |

**Example**  
```js
class HTTPError extends CustomError {  constructor(message: string, config: CustomErrorConfig) {    super(message, config)    this.name = 'HTTPError';  }}new HTTPError('Request data is incorrect', { code: 400 })
```
<a name="HTTPErrors"></a>

## HTTPErrors : <code>object</code>
Contains factories for the common HTTP errors

**Kind**: global namespace  
<a name="HTTPErrors.badRequest"></a>

### HTTPErrors.badRequest()
Creates HTTPError with 400 status code

**Kind**: static method of [<code>HTTPErrors</code>](#HTTPErrors)  
