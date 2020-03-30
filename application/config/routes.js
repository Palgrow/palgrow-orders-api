/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  'GET /': 'HealthController.index',
  'GET /orders/': 'HealthController.index',

  'POST /orders/product/': 'ProductController.create',
  'GET /orders/product/:id': 'ProductController.read',
  'GET /orders/product/': 'ProductController.list',
  'PATCH /orders/product/:id': 'ProductController.update',
  'POST /orders/product/query': 'ProductController.query',

  'POST /orders/reward-class/': 'ProductController.create',
  'GET /orders/reward-class/:id': 'ProductController.read',
  'GET /orders/reward-class/': 'ProductController.list',
  'PATCH /orders/reward-class/:id': 'ProductController.update',
  'POST /orders/reward-class/query': 'ProductController.query',
  'DELETE /orders/reward-class/:id': 'ProductController.delete',
};
