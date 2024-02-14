
export default function ShortsPlayer() {

  // const video = getVideo()
  // https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8
  return (
    <div>
      <video controls autoPlay preload="none" src="https://storage.googleapis.com/shaka-demo-assets/sintel-mp4-only/v-0480p-1000k-libx264.mp4" width="855" height="364">
        Your browser does not support the video tag.
      </video>
    </div>
  )
}