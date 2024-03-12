import { Player } from '@/app/components/player'

export default function ShortsPlayer() {

  // const video = getVideo()
  // https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8
  return (
    <div>
      <Player
        init={true}
        manifestUri={'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8'}
        videoId={''}
      />
    </div>
  )
}