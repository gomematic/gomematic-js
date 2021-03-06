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
 * The UserTeamParams model module.
 * @module gomematic/model/UserTeamParams
 * @version 1.0.0-alpha1
 */
class UserTeamParams {
  /**
     * Constructs a new <code>UserTeamParams</code>.
     * @alias module:gomematic/model/UserTeamParams
     * @param team {String}
     * @param perm {module:gomematic/model/UserTeamParams.PermEnum}
     */
  constructor (team, perm) {
    UserTeamParams.initialize(this, team, perm)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, team, perm) {
    obj['team'] = team
    obj['perm'] = perm
  }

  /**
     * Constructs a <code>UserTeamParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:gomematic/model/UserTeamParams} obj Optional instance to populate.
     * @return {module:gomematic/model/UserTeamParams} The populated <code>UserTeamParams</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new UserTeamParams()

      if (data.hasOwnProperty('team')) {
        obj['team'] = ApiClient.convertToType(data['team'], 'String')
      }
      if (data.hasOwnProperty('perm')) {
        obj['perm'] = ApiClient.convertToType(data['perm'], 'String')
      }
    }
    return obj
  }
}

/**
 * @member {String} team
 */
UserTeamParams.prototype['team'] = undefined

/**
 * @member {module:gomematic/model/UserTeamParams.PermEnum} perm
 */
UserTeamParams.prototype['perm'] = undefined

/**
 * Allowed values for the <code>perm</code> property.
 * @enum {String}
 * @readonly
 */
UserTeamParams['PermEnum'] = {

  /**
     * value: "user"
     * @const
     */
  'user': 'user',

  /**
     * value: "admin"
     * @const
     */
  'admin': 'admin',

  /**
     * value: "owner"
     * @const
     */
  'owner': 'owner'
}

export default UserTeamParams
