const request = require('request');
var category = 'alone';
request.get({
  url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
  headers: {
    'X-Api-Key': 'NIEE3btp7v3CJJdykcVOmw==t9sa4q7pj2D0c08x'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else {
    var sahil = body;
    console.log(sahil);
  module.exports = {sahil,body};
  }
});