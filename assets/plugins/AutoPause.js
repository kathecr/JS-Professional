class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    observer.observe(this.player.media);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }
  handleIntersection(entries) {
    const entry = entries[0];
    console.log(entry);
    entry.intersectionRatio < this.threshold
      ? this.player.pause()
      : this.player.play();
  }
  handleVisibilityChange() {
    document.visibilityState === "visible"
      ? this.player.play()
      : this.player.pause();
  }
}

export default AutoPause;
