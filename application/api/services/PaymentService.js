const base_url = sails.config.settings.api.baseUrl;

module.exports = {
  check_order: async (body, token) =>
    Axios({
      url: `${base_url}/payment/transaction/check_order`,
      method: 'POST',
      data: body,
      headers: {
        Authorization: `${token}`,
      },
      validateStatus: status => status >= 200 && status < 500,
    }),
  charge_order: async (body, token) =>
    Axios({
      url: `${base_url}/payment/transaction/charge_order`,
      method: 'POST',
      data: body,
      headers: {
        Authorization: `${token}`,
      },
      validateStatus: status => status >= 200 && status < 500,
    }),
};
