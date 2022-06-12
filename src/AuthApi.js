/**
 * Professor Bentley Electronics Retail API
 * An ecommerce REST API for a retail electronics store. 
 *
 * OpenAPI spec version: 1.5
 * Contact: jordanh316@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import User from '../User';

/**
* Auth service.
* @module AuthApi
* @version 1.67
*/
export default class AuthApi {

    /**
    * Constructs a new AuthApi. 
    * @alias module:AuthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the registerNewUser operation.
     * @callback module:AuthApi~registerNewUserCallback
     * @param {String} error Error message, if any.
     * @param {module:User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * registers a user into the systme
     * creates a new user record
     * @param {Object} opts Optional parameters
     * @param {module:AuthApi~registerNewUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:User}
     */
    registerNewUser() {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic'];
      let contentTypes = ['application/json', 'mulipart/formdata'];
      let accepts = ['application/x-urlencoded'];
      let returnType = User;

      return this.apiClient.callApi(
        '/auth/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the userLogin operation.
     * @callback module:AuthApi~userLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * authorizes user to use system
     * login user into system
     * @param {module:AuthApi~userLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:User}
     */
    userLogin() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = User;

      return this.apiClient.callApi(
        '/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
