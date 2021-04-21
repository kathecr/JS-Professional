import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads"

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

// const button = document.querySelector("button");
const playButton: HTMLElement = document.querySelector("#playButton");
const muteButton: HTMLElement = document.querySelector("#muteButton");

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();
// button.onclick = () => player.togglePlay();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .catch((error) => console.log(error.message));
}
