
'use client'

export default class ShakaPlayer {
  player : shaka.Player
  videoEl? : HTMLMediaElement
  manifestUri? : string

  constructor() {
    shaka.polyfill.installAll();
    this.player = new window.shaka.Player();
  }

  async init({ videoEl, manifestUri, videoId } : { videoEl : HTMLMediaElement, manifestUri : string, videoId : string }) {
    this.videoEl = videoEl;
    this.manifestUri = manifestUri;
    window.player = {
      ...window.player,
      [videoId]: this
    }

    await this.player.attach(videoEl);

    this.player.addEventListener('error', this.onErrorEvent);

    try {
      await this.player.load(manifestUri);
      console.log('The video has now been loaded!');
      // await player.getMediaElement().play(); // need user interaction
      // console.log('The video is playing!');
    } catch (e) {
      this.onError(e);
    }
  }

  onErrorEvent(event : Event) {
    this.onError(event.detail);
  }

  onError(error: any) {
    console.error('Error code', error.code, 'object', error);
  }

  disposePlayer() {
    this.player.destroy();
  }
}
