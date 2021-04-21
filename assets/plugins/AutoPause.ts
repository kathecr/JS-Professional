import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  player: MediaPlayer;
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
  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    const entry = entries[0];
    entry.intersectionRatio < this.threshold
      ? this.player.pause()
      : this.player.play();
  }
  private handleVisibilityChange(): void {
    document.visibilityState === "visible"
      ? this.player.play()
      : this.player.pause();
  }
}

export default AutoPause;
