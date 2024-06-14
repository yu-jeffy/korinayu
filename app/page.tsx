"use client"; // This directive marks the component as a client component

import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://w.soundcloud.com/player/api.js";
    script.onload = () => {
      const iframeElement = document.querySelector('iframe');
      const widget = SC.Widget(iframeElement);

      widget.bind(SC.Widget.Events.READY, function() {
        console.log('SoundCloud widget is ready');
      });

      widget.bind(SC.Widget.Events.PLAY, function() {
        console.log('SoundCloud widget is playing');
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>K O R I N A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Y U</h1>
      </div>
      <div className={styles.linksContainer}>
        <Link href="https://soundcloud.com/korinayu/" className={styles.link}><span>soundcloud</span></Link>
        <Link href="https://open.spotify.com/artist/6HpKZDudi4UzynPFdlRbFE?si=e-JGKdURQLmGonDilo9QAA" className={styles.link}><span>spotify</span></Link>
        <Link href="https://www.instagram.com/korina.yu" className={styles.link}><span>instagram</span></Link>
        <Link href= "/" className={styles.link}><span>jeff.yu@parallelpolis.llc</span></Link>
      </div>
      <div className={styles.widgetContainer}>
        <iframe 
          width="100%" 
          height="100%" 
          allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/korinayu/sets/stiletto-girl&auto_play=false&color=%230066CC&buying=true&sharing=true&download=true&show_artwork=true&show_playcount=true&show_user=true&start_track=0&single_active=true">
        </iframe>
      </div>

    </div>
  );
}
