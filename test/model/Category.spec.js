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
    instance = new ProfbJsClient.Category();
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

  describe('Category', function() {
    it('should create an instance of Category', function() {
      // uncomment below and update the code to test Category
      //var instane = new ProfbJsClient.Category();
      //expect(instance).to.be.a(ProfbJsClient.Category);
    });

    it('should have the property catid (base name: "catid")', function() {
      // uncomment below and update the code to test the property catid
      //var instane = new ProfbJsClient.Category();
      //expect(instance).to.be();
    });

    it('should have the property catergoryName (base name: "catergoryName")', function() {
      // uncomment below and update the code to test the property catergoryName
      //var instane = new ProfbJsClient.Category();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ProfbJsClient.Category();
      //expect(instance).to.be();
    });

  });

}));
