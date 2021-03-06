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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProfbJsClient);
  }
}(this, function(expect, ProfbJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProfbJsClient.Method();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Method', function() {
    it('should create an instance of Method', function() {
      // uncomment below and update the code to test Method
      //var instane = new ProfbJsClient.Method();
      //expect(instance).to.be.a(ProfbJsClient.Method);
    });

    it('should have the property mid (base name: "mid")', function() {
      // uncomment below and update the code to test the property mid
      //var instane = new ProfbJsClient.Method();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instane = new ProfbJsClient.Method();
      //expect(instance).to.be();
    });

    it('should have the property vid (base name: "vid")', function() {
      // uncomment below and update the code to test the property vid
      //var instane = new ProfbJsClient.Method();
      //expect(instance).to.be();
    });

    it('should have the property deliveryInHours (base name: "deliveryInHours")', function() {
      // uncomment below and update the code to test the property deliveryInHours
      //var instane = new ProfbJsClient.Method();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new ProfbJsClient.Method();
      //expect(instance).to.be();
    });

  });

}));
