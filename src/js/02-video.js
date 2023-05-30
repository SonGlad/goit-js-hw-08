import Player from '@vimeo/player'; 
import Throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";


player.on('timeupdate', Throttle(function({seconds}) { 
  localStorage.setItem(STORAGE_KEY, seconds)
}, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function({seconds}) {
  // seconds = the actual time that the player seeked to
}).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;
      
      default:
        // some other error occurred
        break;
      }
    });




    // import Player from '@vimeo/player';
    // import Throttle from 'lodash.throttle';
    
    // const iframe = document.querySelector('iframe');
    // const player = new Player(iframe);
    // const STORAGE_KEY = 'videoplayer-current-time';
    
    // player.on('timeupdate', Throttle(function ({ seconds }) {
    //     localStorage.setItem(STORAGE_KEY, seconds);
    //   }, 1000)
    // );
    // player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);