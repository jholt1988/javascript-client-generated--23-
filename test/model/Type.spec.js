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
    instance = new ProfbJsClient.Type();
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

  describe('Type', function() {
    it('should create an instance of Type', function() {
      // uncomment below and update the code to test Type
      //var instane = new ProfbJsClient.Type();
      //expect(instance).to.be.a(ProfbJsClient.Type);
    });

    it('should have the property typeid (base name: "typeid")', function() {
      // uncomment below and update the code to test the property typeid
      //var instane = new ProfbJsClient.Type();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ProfbJsClient.Type();
      //expect(instance).to.be();
    });

    it('should have the property typeDescription (base name: "typeDescription")', function() {
      // uncomment below and update the code to test the property typeDescription
      //var instane = new ProfbJsClient.Type();
      //expect(instance).to.be();
    });

  });

}));
