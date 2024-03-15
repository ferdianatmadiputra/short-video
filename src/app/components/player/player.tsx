"use client"

import { useEffect, useMemo, useRef } from "react";
import ShakaPlayer from "@/app/commons/shaka-player/shaka-player";
import styles from './player.module.css'

export default function Player ({ init, manifestUri, videoId, videoClass } : {init: boolean, manifestUri: string, videoId: string, videoClass?: string }) {
  const videoRef = useRef(null)
  const shakaPlayer = useMemo(() => new ShakaPlayer(), [])

  useEffect(() => {
    if (videoRef.current && init) {
      shakaPlayer.init({
        videoEl: videoRef.current,
        manifestUri,
        videoId
      })
    }
  }, [manifestUri, shakaPlayer, videoId, init])

  return (
    <video
      className={[videoClass, styles.video].join(" ")}
      preload={"auto"}
      ref={videoRef}
      id="video"
      poster=""
      controls
      autoPlay
      muted
    />
  )
}
