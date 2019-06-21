# Gomematic.AuthApi

All URIs are relative to *http://try.gomematic.tech/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginUser**](AuthApi.md#loginUser) | **POST** /auth/login | Authenticate an user by credentials
[**refreshAuth**](AuthApi.md#refreshAuth) | **GET** /auth/refresh | Refresh an auth token before it expires
[**verifyAuth**](AuthApi.md#verifyAuth) | **GET** /auth/verify | Verify validity for an authentication token



## loginUser

> AuthToken loginUser(authLogin)

Authenticate an user by credentials

### Example

```javascript
import Gomematic from 'gomematic';
let defaultClient = Gomematic.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Header
let Header = defaultClient.authentications['Header'];
Header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Header.apiKeyPrefix = 'Token';

let apiInstance = new Gomematic.AuthApi();
let authLogin = new Gomematic.AuthLogin(); // AuthLogin | The credentials to authenticate
apiInstance.loginUser(authLogin).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authLogin** | [**AuthLogin**](AuthLogin.md)| The credentials to authenticate | 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refreshAuth

> AuthToken refreshAuth()

Refresh an auth token before it expires

### Example

```javascript
import Gomematic from 'gomematic';
let defaultClient = Gomematic.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Header
let Header = defaultClient.authentications['Header'];
Header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Header.apiKeyPrefix = 'Token';

let apiInstance = new Gomematic.AuthApi();
apiInstance.refreshAuth().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verifyAuth

> AuthVerify verifyAuth()

Verify validity for an authentication token

### Example

```javascript
import Gomematic from 'gomematic';
let defaultClient = Gomematic.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Header
let Header = defaultClient.authentications['Header'];
Header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Header.apiKeyPrefix = 'Token';

let apiInstance = new Gomematic.AuthApi();
apiInstance.verifyAuth().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthVerify**](AuthVerify.md)

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

