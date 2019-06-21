# Gomematic.ProfileApi

All URIs are relative to *http://try.gomematic.tech/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**showProfile**](ProfileApi.md#showProfile) | **GET** /profile/self | Fetch profile details of the personal account
[**tokenProfile**](ProfileApi.md#tokenProfile) | **GET** /profile/token | Retrieve an unlimited auth token
[**updateProfile**](ProfileApi.md#updateProfile) | **PUT** /profile/self | Update your own profile information



## showProfile

> Profile showProfile()

Fetch profile details of the personal account

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

let apiInstance = new Gomematic.ProfileApi();
apiInstance.showProfile().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Profile**](Profile.md)

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokenProfile

> AuthToken tokenProfile()

Retrieve an unlimited auth token

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

let apiInstance = new Gomematic.ProfileApi();
apiInstance.tokenProfile().then((data) => {
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


## updateProfile

> Profile updateProfile(profile)

Update your own profile information

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

let apiInstance = new Gomematic.ProfileApi();
let profile = new Gomematic.Profile(); // Profile | The profile data to update
apiInstance.updateProfile(profile).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile** | [**Profile**](Profile.md)| The profile data to update | 

### Return type

[**Profile**](Profile.md)

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

