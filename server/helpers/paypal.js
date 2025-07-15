const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AdN_ATpAAxXvBu7bIFASxy1ZAjms43J3bG9TTbxG6Yw9u5BTCYk4gAzOrI-PA_fW_XxkqTKK_qm093Nv",
  client_secret: "EJQs7pFtOjid2-N7J7ClehdjXsUuTzfrZ7Nz0rJ7l5b7Xfc7EwVjYuu_yf-ByTwM9c-HUxKydklmUaQj",
});

module.exports = paypal;
