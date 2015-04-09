/* Twtich api to implement later

$('.twitch-connect').click(function() {
  Twitch.login({
    scope: ['user_read', 'channel_read']
  });
})

if (status.authenticated) {
  // Already logged in, hide button
  $('.twitch-connect').hide()
}

Twitch.init({clientId: 'YOUR_CLIENT_ID_HERE'}, function(error, status) {
  if (error) {
    // error encountered while loading
    console.log(error);
  }
  // the sdk is now loaded
  if (status.authenticated) {
    // user is currently logged in
  }
});
*/
//Init Function for Youtube API
function init() {
  gapi.client.setApiKey('AIzaSyCWADhk71JY52Lt9pEq5mj-QWTKUOhf9mw');
  gapi.client.load('urlshortener', 'v1').then(makeRequest);
}

function makeRequest() {
  var request = gapi.client.urlshortener.url.get({
    'shortUrl': 'http://goo.gl/fbsS'
  });
  request.then(function(response) {
    appendResults(response.result.longUrl);
  });
}

function appendResults(text) {
   var results = document.getElementById('results');
   results.appendChild(document.createElement('P'));
   results.appendChild(document.createTextNode(text));
}