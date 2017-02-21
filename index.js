'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import request from 'request'
import cheerio from 'cheerio'

const url = 'http://www.davidsbridal.com/Product_lace-keyhole-tie-back-halter-dress-12089_dresses-new-arrivals'

request(url, (err, res, body) => {
  if (!err && res.statusCode == 200) {
    console.log(body)
  }
})
*/
var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
