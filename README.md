# Twitter-Bot
A mini how to do a simple twitter bot.

##Install node.js 
`sudo apt-get install nodejs`

Or download it from the web: https://nodejs.org/download/

##Install npm and twitter module
Npm is the node packet manager and it contains the twitter module that we are going to use

`sudo apt-get install npm`

Install the twitter module:

`sudo npm twitter`

##Clone this repository
https://github.com/guillermochica/Twitter-Bot/archive/master.zip

##Get your twitter keys and tokens
Enter in https://apps.twitter.com/ and create a new app. You'll fin your keys in the tab "keys and access tokens". You'll have to generate the access tokens.

Once you have them edit the keysBot.json.template adding yout keys and tokens.

`cd Twitter-bot/src`

`cp keysBot.json.template keysBot.json`

Now add your twitter keys in keysBot.json

##Edit twitbot.js as you want
Now it's time to make your bot replys to whatever you want:

Change the word that your script will look up in tweets.

```javascript
//The word that we are going to search in tweets
var word = 'github';
```

Change the content of the reply (the `status` line):

```javascript
client.post('statuses/update', {in_reply_to_status_id: id_str,
      status: '@' + screen_name + ' Todos decían que no, cuando dijo que sí Bolivia.'},
     function(error, tweet, response){
        if(error) throw error;
        console.log(tweet);  // Tweet body
    });
```

##Launch it
`node twitbot.js`

##More documentation
https://github.com/ttezel/twit
