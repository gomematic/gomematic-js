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
 * The User model module.
 * @module gomematic/model/User
 * @version 1.0.0-alpha1
 */
class User {
  /**
     * Constructs a new <code>User</code>.
     * @alias module:gomematic/model/User
     * @param username {String}
     * @param email {String}
     */
  constructor (username, email) {
    User.initialize(this, username, email)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, username, email) {
    obj['username'] = username
    obj['email'] = email
  }

  /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gomematic/model/User} obj Optional instance to populate.
     * @return {module:gomematic/model/User} The populated <code>User</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new User()

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String')
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String')
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String')
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String')
      }
      if (data.hasOwnProperty('admin')) {
        obj['admin'] = ApiClient.convertToType(data['admin'], 'Boolean')
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean')
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date')
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date')
      }
    }
    return obj
  }
}

/**
 * @member {String} id
 */
User.prototype['id'] = undefined

/**
 * @member {String} slug
 */
User.prototype['slug'] = undefined

/**
 * @member {String} username
 */
User.prototype['username'] = undefined

/**
 * @member {String} email
 */
User.prototype['email'] = undefined

/**
 * @member {Boolean} admin
 */
User.prototype['admin'] = undefined

/**
 * @member {Boolean} active
 */
User.prototype['active'] = undefined

/**
 * @member {Date} created_at
 */
User.prototype['created_at'] = undefined

/**
 * @member {Date} updated_at
 */
User.prototype['updated_at'] = undefined

export default User
