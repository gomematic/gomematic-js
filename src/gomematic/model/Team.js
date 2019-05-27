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
 * The Team model module.
 * @module gomematic/model/Team
 * @version 1.0.0-alpha1
 */
class Team {
  /**
     * Constructs a new <code>Team</code>.
     * @alias module:gomematic/model/Team
     * @param name {String}
     */
  constructor (name) {
    Team.initialize(this, name)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, name) {
    obj['name'] = name
  }

  /**
     * Constructs a <code>Team</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gomematic/model/Team} obj Optional instance to populate.
     * @return {module:gomematic/model/Team} The populated <code>Team</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new Team()

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String')
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String')
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String')
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
Team.prototype['id'] = undefined

/**
 * @member {String} slug
 */
Team.prototype['slug'] = undefined

/**
 * @member {String} name
 */
Team.prototype['name'] = undefined

/**
 * @member {Date} created_at
 */
Team.prototype['created_at'] = undefined

/**
 * @member {Date} updated_at
 */
Team.prototype['updated_at'] = undefined

export default Team
