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
    api_key: api_key,
    api_secret_key: apiSecret_key,
    access_token: access_token,
    access_token_secret: access_token_secret
    // consumer_key: access_token,
    // consumer_secret: access_token_secret,
    // bearer_token: barrer_token
});

let params = { screen_name: 'AndresGomcer' };

let tweets = client.get('statuses/user_timeline', params, function(error, tweets, response){

    console.log(tweets);    
    try {
        if(!error){
            console.log(tweets);
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = tweets;