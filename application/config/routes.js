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

  'POST /orders/reward-class/': 'RewardClassController.create',
  'GET /orders/reward-class/:id': 'RewardClassController.read',
  'GET /orders/reward-class/': 'RewardClassController.list',
  'PATCH /orders/reward-class/:id': 'RewardClassController.update',
  'POST /orders/reward-class/query': 'RewardClassController.query',
  'DELETE /orders/reward-class/:id': 'RewardClassController.delete',

  'POST /orders/referral-rule/': 'ReferralRuleController.create',
  'GET /orders/referral-rule/:id': 'ReferralRuleController.read',
  'GET /orders/referral-rule/': 'ReferralRuleController.list',
  'PATCH /orders/referral-rule/:id': 'ReferralRuleController.update',
  'DELETE /orders/referral-rule/:id': 'ReferralRuleController.delete',
};
