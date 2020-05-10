/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/

  '*': true,

  ProductController: {
    create: ['isAuthorized', 'isAdmin'],
    read: ['isAuthorized'],
    update: ['isAuthorized', 'isAdmin'],
    list: ['isAuthorized'],
    query: ['isAuthorized'],
  },

  RewardClassController: {
    create: ['isAuthorized', 'isAdmin'],
    read: ['isAuthorized', 'isAdmin'],
    update: ['isAuthorized', 'isAdmin'],
    update_bulk: ['isAuthorized', 'isAdmin'],
    list: ['isAuthorized', 'isAdmin'],
    query: ['isAuthorized'],
    delete: ['isAuthorized', 'isAdmin'],
  },

  ReferralRuleController: {
    create: ['isAuthorized', 'isAdmin'],
    read: ['isAuthorized', 'isAdmin'],
    update: ['isAuthorized', 'isAdmin'],
    list: ['isAuthorized', 'isAdmin'],
    query: ['isAuthorized'],
    delete: ['isAuthorized', 'isAdmin'],
  },
};
