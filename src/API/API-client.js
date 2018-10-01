const https = require('https');
const goodReadsJSONResponse = require('./GR_JSON_response');
const APIkey = 'eCuCTJhM3hFcUN5sdlYA6g';
const title = 'narnia'
// put the title as a state that is updating as the input value entered changes. 

// const API = `https://www.goodreads.com/book/title.xml?author=${author}&key=Uxb0zPb86N4STVy2ECWYA&title=${book}`; // author || title
const API = `https://www.goodreads.com/book/title.xml?key=${APIkey}&title=${title}`; 
// const API = 'https://www.goodreads.com/book/isbn/0441172717?key=Uxb0zPb86N4STVy2ECWYA'; // isbn

// then return :

https.get(API, (res) => {
  res.setEncoding('utf8');
  let rawData = '';
   res.on('data', (chunk) => rawData += chunk);
   res.on('end', () => {
    const response = goodReadsJSONResponse.convertToJson(rawData);
   console.log( response, response.book.title, response.book.average_rating, response.book.ratings_count);
   return response;
  });
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});
