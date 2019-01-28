const request = require('request');

let geocodeAddress = (address) => {
  let encodedAddress = encodeURIComponent(address);
  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD2KT__x0Gy8QHNbZhJfZfgq2q2RTGcseE`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200){
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      } else {
        reject('unable to fetch weather information');
      }
    });
  })
};

geocodeAddress('17578').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
