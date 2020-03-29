/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    try {
      const { organization } = req.user;
      const payload = req.body;
      const image = await GCSService.get_file(req, 'image');
      if (image) payload.image = await GCSService.upload(image, 'images/products/bn');
      const product = await Product.create({
        ...payload,
        organization,
      }).fetch();
      return ResponseHelper.json(200, res, 'Product created successfully', product);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },

  update: async (req, res) => {},
  list: async (req, res) => {},

  update: async (req, res) => {},
};
