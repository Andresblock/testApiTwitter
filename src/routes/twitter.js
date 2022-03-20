const Twitter =  require('twitter');
require('dotenv/config');

// Varibales de twitter:

const api_key = process.env.api_key;
const apiSecret_key = process.env.api_secret_key;
const access_token = process.env.access_token;
const access_token_secret = process.env.access_token_secret;
const barrer_token = process.env.barrer_token;

// Definicion del objeto cliente para twitter:

let client = new Twitter({
  consumer_key: api_key,
  consumer_secret: apiSecret_key,
  access_token_key: access_token,
  access_token_secret: access_token_secret
});

let params = {screen_name: 'EnterateCali', count: 5};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log('los tweets son: ',tweets);
    }
});

//module.exports = tweets;