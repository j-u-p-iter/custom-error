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

