import { Player } from '@/app/components/player'
import styles from './shorts.module.css'

export default function Shorts() {

  // const video = getVideo()
  // https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8
  return (
    <div className={styles.container}>
      <Player
        init={true}
        manifestUri={'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8'}
        videoId={'12ac2'}
      />
    </div>
  )
}