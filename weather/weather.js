const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/a1ebb0b08331a35d981bed74d5c02816/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      callback('unable to fetch weather information');
    }
  });
};

module.exports.getWeather = getWeather;

// let geocodeAddress = (address, callback) => {
//   let encodedAddress = encodeURIComponent(address);
//   request({
//     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD2KT__x0Gy8QHNbZhJfZfgq2q2RTGcseE`,
//     json: true
//   }, (error, response, body) => {
//     if (error){
//       callback('Unable to connect');
//     } else if (body.status === 'ZERO_RESULTS'){
//         callback('Unable to find a matching address');
//     } else if (body.status === 'OK'){
//         callback(undefined, {
//           address: body.results[0].formatted_address,
//           lat: body.results[0].geometry.location.lat,
//           lng: body.results[0].geometry.location.lng
//         });
//     }
//   });
// };
