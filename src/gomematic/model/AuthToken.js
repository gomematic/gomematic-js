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

import ApiClient from '../ApiClient'

/**
 * The AuthToken model module.
 * @module gomematic/model/AuthToken
 * @version 1.0.0-alpha1
 */
class AuthToken {
  /**
     * Constructs a new <code>AuthToken</code>.
     * @alias module:gomematic/model/AuthToken
     * @param token {String}
     * @param expiresAt {Date}
     */
  constructor (token, expiresAt) {
    AuthToken.initialize(this, token, expiresAt)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, token, expiresAt) {
    obj['token'] = token
    obj['expires_at'] = expiresAt
  }

  /**
     * Constructs a <code>AuthToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gomematic/model/AuthToken} obj Optional instance to populate.
     * @return {module:gomematic/model/AuthToken} The populated <code>AuthToken</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new AuthToken()

      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String')
      }
      if (data.hasOwnProperty('expires_at')) {
        obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date')
      }
    }
    return obj
  }
}

/**
 * @member {String} token
 */
AuthToken.prototype['token'] = undefined

/**
 * @member {Date} expires_at
 */
AuthToken.prototype['expires_at'] = undefined

export default AuthToken