<<<<<<< HEAD
const https = require('https');
const goodReadsJSONResponse = require('./GR_JSON_response');
const APIkey = 'eCuCTJhM3hFcUN5sdlYA6g';
const title = 'narnia'
// put the title as a state that is updating as the input value entered changes. 

// const API = `https://www.goodreads.com/book/title.xml?author=${author}&key=Uxb0zPb86N4STVy2ECWYA&title=${book}`; // author || title
const API = `https://www.goodreads.com/book/title.xml?key=${APIkey}&title=${title}`; 
// const API = 'https://www.goodreads.com/book/isbn/0441172717?key=Uxb0zPb86N4STVy2ECWYA'; // isbn
=======
// manipulating goodreads'API here.
// npm install --save goodreads-json-api 
// AND ALSO
// npm install cheerio as the first package is built upon that one 

// JUST A DEMO HERE 


'use strict'

const https = require('https');
const goodReadsJSONResponse = require('./GR_JSON_response');
const APIkey = 'eCuCTJhM3hFcUN5sdlYA6g';
const title = 'Harry Potter'

// API fetch

// const API = `https://www.goodreads.com/book/title.xml?author=${author}&key=Uxb0zPb86N4STVy2ECWYA&title=${book}`;
const API = `https://www.goodreads.com/book/title.xml?key=${APIkey}&title=${title}`;
// const API = 'https://www.goodreads.com/book/isbn/0441172717?key=Uxb0zPb86N4STVy2ECWYA';

>>>>>>> f854fe46afb979459cc8d8f9a1bfe310f95365b2

// then return :

https.get(API, (res) => {
  res.setEncoding('utf8');
  let rawData = '';
<<<<<<< HEAD
   res.on('data', (chunk) => rawData += chunk);
   res.on('end', () => {
    const response = goodReadsJSONResponse.convertToJson(rawData);
   console.log( response, response.book.title, response.book.average_rating, response.book.ratings_count);
   return response;
   
  });
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});
=======
  res.on('data', (chunk) => rawData += chunk);
  res.on('end', () => {
    const response = goodReadsJSONResponse.convertToJson(rawData);
    console.log(response);
  });
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});
>>>>>>> f854fe46afb979459cc8d8f9a1bfe310f95365b2
