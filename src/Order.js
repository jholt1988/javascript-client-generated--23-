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

import ApiClient from '../ApiClient';
import OrderItems from './OrderItems';

/**
* The Order model module.
* @module Order
* @version 1.67
*/
export default class Order {
    /**
    * Constructs a new <code>Order</code>.
    * user order record with all the details of an order
    * @alias module:Order
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Order} obj Optional instance to populate.
    * @return {module:Order} The populated <code>Order</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Order();
                        
            
            if (data.hasOwnProperty('oid')) {
                obj['oid'] = ApiClient.convertToType(data['oid'], 'String');
            }
            if (data.hasOwnProperty('subtotal')) {
                obj['subtotal'] = ApiClient.convertToType(data['subtotal'], 'Number');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('itemsTotal')) {
                obj['itemsTotal'] = ApiClient.convertToType(data['itemsTotal'], 'Number');
            }
            if (data.hasOwnProperty('deliveryFee')) {
                obj['deliveryFee'] = ApiClient.convertToType(data['deliveryFee'], 'Number');
            }
            if (data.hasOwnProperty('deliveryId')) {
                obj['deliveryId'] = ApiClient.convertToType(data['deliveryId'], 'String');
            }
            if (data.hasOwnProperty('payId')) {
                obj['payId'] = ApiClient.convertToType(data['payId'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [OrderItems]);
            }
            if (data.hasOwnProperty('statusId')) {
                obj['statusId'] = ApiClient.convertToType(data['statusId'], 'Number');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('updatedOn')) {
                obj['updatedOn'] = ApiClient.convertToType(data['updatedOn'], 'Date');
            }
        }
        return obj;
    }

    /**
    * @member {String} oid
    */
    'oid' = undefined;
    /**
    * @member {Number} subtotal
    */
    'subtotal' = undefined;
    /**
    * @member {Number} tax
    */
    'tax' = undefined;
    /**
    * @member {Number} total
    */
    'total' = undefined;
    /**
    * @member {Number} itemsTotal
    */
    'itemsTotal' = undefined;
    /**
    * @member {Number} deliveryFee
    */
    'deliveryFee' = undefined;
    /**
    * @member {String} deliveryId
    */
    'deliveryId' = undefined;
    /**
    * @member {String} payId
    */
    'payId' = undefined;
    /**
    * @member {Array.<module:OrderItems>} items
    */
    'items' = undefined;
    /**
    * @member {Number} statusId
    */
    'statusId' = undefined;
    /**
    * @member {Date} createdOn
    */
    'createdOn' = undefined;
    /**
    * @member {Date} updatedOn
    */
    'updatedOn' = undefined;




}
