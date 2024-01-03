#!/usr/bin/node

const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/' + id;
const request = require('request');

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    body = JSON.parse(body);
    for (let i in body.characters) {
      request(body.characters[i], function (err, response, body) {
	if (err) {
	  console.log(err);
	} else if (response.statusCode === 200) {
	  console.log(JSON.parse(body).name);
	}
      });
    }
  } else {
    console.log('Erorr Code:' + response.statusCode);
  }
});
