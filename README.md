# profb-js-client

ProfbJsClient - JavaScript client for profb-js-client
An ecommerce REST API for a retail electronics store. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.5
- Package version: 1.67
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install profb-js-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ProfbJsClient = require('profb-js-client');
var defaultClient = ProfbJsClient.ApiClient.instance;
// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME'
basic.password = 'YOUR PASSWORD'

var api = new ProfbJsClient.AuthApi()
var opts = { 
  'body': new ProfbJsClient.User() // {User} A new user record to add to the system
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.registerNewUser(opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/holtenterprises/prof-bentley_ecommerce_api/1.5*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ProfbJsClient.AuthApi* | [**registerNewUser**](docs/AuthApi.md#registerNewUser) | **POST** /auth/register | registers a user into the systme
*ProfbJsClient.AuthApi* | [**userLogin**](docs/AuthApi.md#userLogin) | **POST** /auth/login | authorizes user to use system
*ProfbJsClient.CartApi* | [**addCartItems**](docs/CartApi.md#addCartItems) | **POST** /cart/{cartid} | Adds items to cart
*ProfbJsClient.CartApi* | [**postNewCart**](docs/CartApi.md#postNewCart) | **POST** /cart | creates a new user cart
*ProfbJsClient.CartApi* | [**updateCartItems**](docs/CartApi.md#updateCartItems) | **PUT** /cart/{cartid} | update user cart by id
*ProfbJsClient.CheckoutApi* | [**postPayment**](docs/CheckoutApi.md#postPayment) | **POST** /checkout/{orderid} | post a payment for user order
*ProfbJsClient.OrdersApi* | [**getAllUserOrders**](docs/OrdersApi.md#getAllUserOrders) | **GET** /orders | fetchs all user orders
*ProfbJsClient.OrdersApi* | [**postNewOrder**](docs/OrdersApi.md#postNewOrder) | **POST** /orders/{orderid} | post a new user order
*ProfbJsClient.OrdersApi* | [**postPayment**](docs/OrdersApi.md#postPayment) | **POST** /checkout/{orderid} | post a payment for user order
*ProfbJsClient.ProductsApi* | [**getAllproducts**](docs/ProductsApi.md#getAllproducts) | **GET** /store/products | fetchs all product records
*ProfbJsClient.ProductsApi* | [**getProduct**](docs/ProductsApi.md#getProduct) | **GET** /store/products/{productid} | get user record by id
*ProfbJsClient.ProductsApi* | [**updateProduct**](docs/ProductsApi.md#updateProduct) | **PUT** /store/products/{productid} | update user record by id
*ProfbJsClient.StoreApi* | [**getAllproducts**](docs/StoreApi.md#getAllproducts) | **GET** /store/products | fetchs all product records
*ProfbJsClient.StoreApi* | [**getProduct**](docs/StoreApi.md#getProduct) | **GET** /store/products/{productid} | get user record by id
*ProfbJsClient.StoreApi* | [**updateProduct**](docs/StoreApi.md#updateProduct) | **PUT** /store/products/{productid} | update user record by id
*ProfbJsClient.UsersApi* | [**getAllUsers**](docs/UsersApi.md#getAllUsers) | **GET** /users | fetchs all user records
*ProfbJsClient.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{userid} | get user record by id
*ProfbJsClient.UsersApi* | [**updateUser**](docs/UsersApi.md#updateUser) | **PUT** /users/{userid} | update user record by id
*ProfbJsClient.VendorsApi* | [**getAllvendors**](docs/VendorsApi.md#getAllvendors) | **GET** /store/vendors | fetchs all vendor records
*ProfbJsClient.VendorsApi* | [**getVendor**](docs/VendorsApi.md#getVendor) | **GET** /store/vendors/{vendorid} | get user record by id
*ProfbJsClient.VendorsApi* | [**updateVendor**](docs/VendorsApi.md#updateVendor) | **PUT** /store/vendors/{vendorid} | update vendor record by id

## Documentation for Models

 - [ProfbJsClient.Address](docs/Address.md)
 - [ProfbJsClient.Cart](docs/Cart.md)
 - [ProfbJsClient.CartItems](docs/CartItems.md)
 - [ProfbJsClient.Category](docs/Category.md)
 - [ProfbJsClient.Delivery](docs/Delivery.md)
 - [ProfbJsClient.ErrorModel](docs/ErrorModel.md)
 - [ProfbJsClient.ExtendedErrorModel](docs/ExtendedErrorModel.md)
 - [ProfbJsClient.InlineResponse200](docs/InlineResponse200.md)
 - [ProfbJsClient.InlineResponse404](docs/InlineResponse404.md)
 - [ProfbJsClient.Method](docs/Method.md)
 - [ProfbJsClient.Order](docs/Order.md)
 - [ProfbJsClient.OrderItems](docs/OrderItems.md)
 - [ProfbJsClient.Payment](docs/Payment.md)
 - [ProfbJsClient.Product](docs/Product.md)
 - [ProfbJsClient.Status](docs/Status.md)
 - [ProfbJsClient.Type](docs/Type.md)
 - [ProfbJsClient.User](docs/User.md)
 - [ProfbJsClient.UserAddress](docs/UserAddress.md)
 - [ProfbJsClient.Vendor](docs/Vendor.md)

## Documentation for Authorization


### basic

- **Type**: HTTP basic authentication
