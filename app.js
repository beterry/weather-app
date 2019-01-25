const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadephia&key=AIzaSyD2KT__x0Gy8QHNbZhJfZfgq2q2RTGcseE',
  json: true
}, (error, response, body) => {
  console.log(body);
})
