/**
 * HealthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: (req, res) => ResponseHelper.json(200, res, 'Orders service up!'),
  };
  