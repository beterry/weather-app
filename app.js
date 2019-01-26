const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let address = encodeURIComponent(argv.a);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD2KT__x0Gy8QHNbZhJfZfgq2q2RTGcseE`,
  json: true
}, (error, response, body) => {
  if (error){
    console.log('Unable to connect');
  } else if (body.status === 'ZERO_RESULTS'){
      console.log('Unable to find a matching address');
  } else if (body.status === 'OK'){
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`LAT: ${body.results[0].geometry.location.lat}`);
      console.log(`LNG: ${body.results[0].geometry.location.lng}`);
  }
});
