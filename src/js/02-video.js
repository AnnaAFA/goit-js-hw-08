import Player from '@vimeo/player';
// console.log(Player);
const throttle = require('lodash.throttle');
// console.log(throttle);
const iframe = document.querySelector('iframe');
// console.log(iframe);
const player = new Player(iframe);
// console.log(player);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
(function onPlayerPlay() {
  const saveData = localStorage.getItem('videoplayer-current-time');
  if (!saveData) {
    return;
  }
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time') ?? 0);
})();
