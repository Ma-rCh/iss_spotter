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


module.exports = { fetchMyIP };
