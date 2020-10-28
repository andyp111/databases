var db = require('../db');

module.exports = {
  getAll: function (cb) {
    var queryStr = 'query to get all messages';
    db.query(queryStr, (error, result) => {
      if (error) {
        console.log('error');
      } else {
        console.log('result:' + result);
        cb(null, result);
      }
    });
  }, // a function which produces all the messages
  create: function (cb) {
    var queryStr = 'query to insert message';
    db.query(queryStr, (error, result) => {
      if (error) {
        console.log('error');
      } else {
        console.log('result:' + result);
        cb(null, result);
      }
    });
  } // a function which can be used to insert a message into the database
};
