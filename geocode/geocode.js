const request = require('request');

let geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD2KT__x0Gy8QHNbZhJfZfgq2q2RTGcseE`,
    json: true
  }, (error, response, body) => {
    if (error){
      callback('Unable to connect');
    } else if (body.status === 'ZERO_RESULTS'){
        callback('Unable to find a matching address');
    } else if (body.status === 'OK'){
        callback(undefined, {
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
    }
  });
};

module.exports = {
  geocodeAddress
};
