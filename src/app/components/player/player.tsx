'use-client'

import { useEffect, useRef } from "react";
import 'shaka-player'

export default function Player({ init, manifestUri, videoId} : {init: boolean, manifestUri: string }) {
  const videoRef = useRef(null)

  useEffect(() => {
    async function initPlayer() {
      // Create a Player instance.
      const player = new shaka.Player();
      if (videoRef.current) {
        await player.attach(videoRef.current);
      }
    
      window.player = player;
    
      // Listen for error events.
      player.addEventListener('error', onErrorEvent);
    
      // Try to load a manifest.
      // This is an asynchronous process.
      try {
        await player.load(manifestUri);
        console.log('The video has now been loaded!');
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
      />
    </div>
  )
}
