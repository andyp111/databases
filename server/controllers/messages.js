var models = require('../models');

module.exports = {
  get: function (req, res) {
    //error first callback
    messages.get((error, result) => {
      if (error) {
        console.log('error in getting messages');
      } else {
        res.JSON.stringify(result);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};
