"use client"

import { useEffect, useRef } from "react";


export default function Player ({ init, manifestUri, videoId} : {init: boolean, manifestUri: string, videoId: string }) {
  const videoRef = useRef(null)
  window.shaka.polyfill.installAll();

  useEffect(() => {
    async function initPlayer() {
      const player = new window.shaka.Player();
      if (videoRef.current) {
        await player.attach(videoRef.current);
      }

      window.player = player;
    
      player.addEventListener('error', onErrorEvent);

      try {
        await player.load(manifestUri);
        console.log('The video has now been loaded!');
        // await player.getMediaElement().play(); // need user interaction
        // console.log('The video is playing!');
      } catch (e) {
        onError(e);
      }
    }

    function onErrorEvent(event) {
      onError(event.detail);
    }
    
    function onError(error) {
      console.error('Error code', error.code, 'object', error);
    }

    if (init) initPlayer()
    console.log('player initiated')
  }, [init, manifestUri])

  return (
    <div>
      <video
        ref={videoRef}
        id="video"
        width="640"
        poster=""
        controls
        autoPlay
        muted
      />
    </div>
  )
}
