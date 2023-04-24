import SpotifyWebApi from 'spotify-web-api-js';


const token = localStorage.getItem('spotify_access_token');
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);


// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err: any, data: any) {
//     if (err) console.error(err);
//     else console.log('Artist albums', data);
// });

// // get Elvis' albums, using Promises through Promise, Q or when
// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
//     function (data) {
//         console.log('Artist albums', data);
//     },
//     function (err) {
//         console.error(err);
//     }
// );

spotifyApi.getMyTopTracks({ limit: 10, offset: 20 })
  .then(function(data) {
    console.log('Top tracks', data);
  }, function(err) {
    console.error(err);
  });
