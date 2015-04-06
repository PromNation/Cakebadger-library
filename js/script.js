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
$('body').html(function(i, html) {
    return html.replace(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g, '<center><iframe width="640" height="360" src="http://www.youtube.com/embed/$1?modestbranding=1&rel=0&wmode=transparent&theme=light&color=white" frameborder="0" allowfullscreen></iframe></center>').replace(/(?:http:\/\/)?(?:www\.)?(?:vimeo\.com)\/(.+)/g, '<center><iframe src="//player.vimeo.com/video/$1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></center>').replace(/(?:http:\/\/)?(?:dailymotion\.com|dai\.ly)\/(.+)/g, '<center><iframe frameborder="0" width="560" height="315" src="http://www.dailymotion.com/embed/video/$1?logo=0&foreground=ffffff&highlight=1bb4c6&background=000000" allowfullscreen></iframe></center>');

});