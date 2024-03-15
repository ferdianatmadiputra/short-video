'use client'

import Image from 'next/image';
import { Shorts } from '../components/shorts'
import Script from 'next/script'
import {useState } from 'react';

export default function ShortsPage() {
  const [isLoadingShaka, setIsLoadingShaka] = useState(true);

  return (
    <main>
      <Script src="https://cdn.jsdelivr.net/npm/shaka-player@4.7.11/dist/shaka-player.compiled.min.js" onLoad={() => { setIsLoadingShaka(false)}}/>
      { isLoadingShaka? 
        <Image src="/assets/next.svg" alt="" width="20" height="20"/>
        :
        <Shorts /> }
    </main>
  );
}
