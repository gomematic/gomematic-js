/**
 * Gomematic OpenAPI
 * API definition for Gomematic
 *
 * The version of the OpenAPI document: 1.0.0-alpha1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

/* eslint-disable no-unused-vars */
import ApiClient from '../ApiClient'
import GeneralError from '../model/GeneralError'
import TeamUser from '../model/TeamUser'
import User from '../model/User'
import UserTeamParams from '../model/UserTeamParams'
import ValidationError from '../model/ValidationError'
/* eslint-enable no-unused-vars */

/**
* User service.
* @module gomematic/api/UserApi
* @version 1.0.0-alpha1
*/
export default class UserApi {
  /**
    * Constructs a new UserApi.
    * @alias module:gomematic/api/UserApi
    * @class
    * @param {module:gomematic/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:gomematic/ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Assign a team to user
     * @param {String} userId A user UUID or slug
     * @param {module:gomematic/model/UserTeamParams} userTeam The user team data to assign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gomematic/model/GeneralError} and HTTP response
     */
  appendUserToTeamWithHttpInfo (userId, userTeam) {
    let postBody = userTeam
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error("Missing the required parameter 'userId' when calling appendUserToTeam")
    }
    // verify the required parameter 'userTeam' is set
    if (userTeam === undefined || userTeam === null) {
      throw new Error("Missing the required parameter 'userTeam' when calling appendUserToTeam")
    }

    let pathParams = {
      'user_id': userId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GeneralError
    return this.apiClient.callApi(
      '/users/{user_id}/teams', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Assign a team to user
     * @param {String} userId A user UUID or slug
     * @param {module:gomematic/model/UserTeamParams} userTeam The user team data to assign
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gomematic/model/GeneralError}
     */
  appendUserToTeam (userId, userTeam) {
    return this.appendUserToTeamWithHttpInfo(userId, userTeam)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Create a new user
     * @param {module:gomematic/model/User} user The user data to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gomematic/model/User} and HTTP response
     */
  createUserWithHttpInfo (user) {
    let postBody = user
    // verify the required parameter 'user' is set
    if (user === undefined || user === null) {
      throw new Error("Missing the required parameter 'user' when calling createUser")
    }

    let pathParams = {
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = User
    return this.apiClient.callApi(
      '/users', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Create a new user
     * @param {module:gomematic/model/User} user The user data to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gomematic/model/User}
     */
  createUser (user) {
    return this.createUserWithHttpInfo(user)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Delete a specific user
     * @param {String} userId A user UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gomematic/model/GeneralError} and HTTP response
     */
  deleteUserWithHttpInfo (userId) {
    let postBody = null
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error("Missing the required parameter 'userId' when calling deleteUser")
    }

    let pathParams = {
      'user_id': userId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = GeneralError
    return this.apiClient.callApi(
      '/users/{user_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Delete a specific user
     * @param {String} userId A user UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gomematic/model/GeneralError}
     */
  deleteUser (userId) {
    return this.deleteUserWithHttpInfo(userId)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Remove a team from user
     * @param {String} userId A user UUID or slug
     * @param {module:gomematic/model/UserTeamParams} userTeam The user team data to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gomematic/model/GeneralError} and HTTP response
     */
  deleteUserFromTeamWithHttpInfo (userId, userTeam) {
    let postBody = userTeam
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error("Missing the required parameter 'userId' when calling deleteUserFromTeam")
    }
    // verify the required parameter 'userTeam' is set
    if (userTeam === undefined || userTeam === null) {
      throw new Error("Missing the required parameter 'userTeam' when calling deleteUserFromTeam")
    }

    let pathParams = {
      'user_id': userId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GeneralError
    return this.apiClient.callApi(
      '/users/{user_id}/teams', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Remove a team from user
     * @param {String} userId A user UUID or slug
     * @param {module:gomematic/model/UserTeamParams} userTeam The user team data to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gomematic/model/GeneralError}
     */
  deleteUserFromTeam (userId, userTeam) {
    return this.deleteUserFromTeamWithHttpInfo(userId, userTeam)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Fetch all teams assigned to user
     * @param {String} userId A user UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:gomematic/model/TeamUser>} and HTTP response
     */
  listUserTeamsWithHttpInfo (userId) {
    let postBody = null
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error("Missing the required parameter 'userId' when calling listUserTeams")
    }

    let pathParams = {
      'user_id': userId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = [TeamUser]
    return this.apiClient.callApi(
      '/users/{user_id}/teams', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Fetch all teams assigned to user
     * @param {String} userId A user UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:gomematic/model/TeamUser>}
     */
  listUserTeams (userId) {
    return this.listUserTeamsWithHttpInfo(userId)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Fetch all available users
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:gomematic/model/User>} and HTTP response
     */
  listUsersWithHttpInfo () {
    let postBody = null

    let pathParams = {
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = [User]
    return this.apiClient.callApi(
      '/users', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Fetch all available users
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:gomematic/model/User>}
     */
  listUsers () {
    return this.listUsersWithHttpInfo()
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Update team perms for user
     * @param {String} userId A user UUID or slug
     * @param {module:gomematic/model/UserTeamParams} userTeam The user team data to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gomematic/model/GeneralError} and HTTP response
     */
  permitUserTeamWithHttpInfo (userId, userTeam) {
    let postBody = userTeam
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error("Missing the required parameter 'userId' when calling permitUserTeam")
    }
    // verify the required parameter 'userTeam' is set
    if (userTeam === undefined || userTeam === null) {
      throw new Error("Missing the required parameter 'userTeam' when calling permitUserTeam")
    }

    let pathParams = {
      'user_id': userId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GeneralError
    return this.apiClient.callApi(
      '/users/{user_id}/teams', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Update team perms for user
     * @param {String} userId A user UUID or slug
     * @param {module:gomematic/model/UserTeamParams} userTeam The user team data to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gomematic/model/GeneralError}
     */
  permitUserTeam (userId, userTeam) {
    return this.permitUserTeamWithHttpInfo(userId, userTeam)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Fetch a specific user
     * @param {String} userId A user UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gomematic/model/User} and HTTP response
     */
  showUserWithHttpInfo (userId) {
    let postBody = null
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error("Missing the required parameter 'userId' when calling showUser")
    }

    let pathParams = {
      'user_id': userId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = User
    return this.apiClient.callApi(
      '/users/{user_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Fetch a specific user
     * @param {String} userId A user UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gomematic/model/User}
     */
  showUser (userId) {
    return this.showUserWithHttpInfo(userId)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Update a specific user
     * @param {String} userId A user UUID or slug
     * @param {module:gomematic/model/User} user The user data to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:gomematic/model/User} and HTTP response
     */
  updateUserWithHttpInfo (userId, user) {
    let postBody = user
    // verify the required parameter 'userId' is set
    if (userId === undefined || userId === null) {
      throw new Error("Missing the required parameter 'userId' when calling updateUser")
    }
    // verify the required parameter 'user' is set
    if (user === undefined || user === null) {
      throw new Error("Missing the required parameter 'user' when calling updateUser")
    }

    let pathParams = {
      'user_id': userId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = User
    return this.apiClient.callApi(
      '/users/{user_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Update a specific user
     * @param {String} userId A user UUID or slug
     * @param {module:gomematic/model/User} user The user data to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:gomematic/model/User}
     */
  updateUser (userId, user) {
    return this.updateUserWithHttpInfo(userId, user)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }
}
