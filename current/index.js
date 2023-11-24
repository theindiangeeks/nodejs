const CurrentsAPI = require('currentsapi');
const currentsapi = new CurrentsAPI('UOsmTPHOXNyDHy2kl5SevfOc3ZttOwGuTjd853OO7sUL0G9v');
 
// To query latest news
// All options passed to search are optional
currentsapi.search({
  keywords: 'Trump',
  language: 'en',
  country: 'US'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      news: [...]
    }
  */
});