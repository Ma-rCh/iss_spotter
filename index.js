// index.js
const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return JSON.parse(body).ip;
  }

  console.log('It worked! Returned IP:' , ip);
});
