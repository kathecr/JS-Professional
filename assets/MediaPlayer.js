class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [new AutoPlay()];

    this._initPlugins();
  }
  _initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  toggleMute() {
    this.media.muted = !this.media.muted;
  }
}
export default MediaPlayer