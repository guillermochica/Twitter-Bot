//Load twitter module
var Twitter = require('twitter');
//Load de JSON file with bot's keys and tokens
var keys = require('./keysBot.json');

//Create the bot
var client = new Twitter(keys);

//The word that we are going to search in tweets
var word = 'github';
//Variables to store the twitter user id and screen name to make a reply
var id_str, screen_name;


client.stream('statuses/filter', {track: word}, function(stream) {
  console.log('Bot started looking for the word ' + word + '.');
  stream.on('data', function(tweet) {

    console.log(tweet.text); //Displays the tweet with the word
    //We store the twitter id and the user screen name to make a reply
    id_str = tweet.id_str;
    screen_name = tweet.user.screen_name;

    //Now we are going to reply the tweet
    client.post('statuses/update', {in_reply_to_status_id: id_str,
      status: '@' + screen_name + ' This bot is absolutely useless, sorry dude.'},
     function(error, tweet, response){
        if(error) throw error;
        console.log(tweet);  // Tweet body
    });

  });

  stream.on('error', function(error) {
    throw error;
  });
});
