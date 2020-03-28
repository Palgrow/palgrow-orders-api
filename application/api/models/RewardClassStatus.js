/**
 * RewardClassStatus.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    distributor: {
      model: "Distributor"
    },
    organization: {
      model: "Organization"
    },
    reward_class: {
      model: "RewardClass"
    }
  }
};
