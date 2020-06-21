const apiBaseUrl = sails.config.settings.api.baseUrl;

module.exports = {
  send_sms: body =>
    Axios({
      url: `${apiBaseUrl}notification/sms`,
      method: 'POST',
      data: body,
    }),
  send_email: body =>
    Axios({
      url: `${apiBaseUrl}notification/email`,
      method: 'POST',
      data: body,
    }),
};
