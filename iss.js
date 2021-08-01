var http = require('http');
var fs = require('fs');
const request = require('request');
const url = 'https://api.ipify.org?format=json';



const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
  request(url, (error, response, body) => {
 
    if (error) {
      return callback(error, null);
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
  
   callback(null,JSON.parse(body).ip);
 });
}

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body);

    callback(null, { latitude, longitude});
  });
};

// Don't need to export the other function since we are not testing it right now.
module.exports = { fetchCoordsByIP };

//module.exports = { fetchMyIP };