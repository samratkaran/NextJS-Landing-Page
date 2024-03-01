"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicContent = [
  {
    title: "Discover New Artists",
    description:
      "Explore a diverse range of genres and discover new artists from around the world. Whether you're into pop, rock, jazz, classical, electronic, hip-hop, or indie music, our platform offers a vast library of songs and albums waiting to be explored. From emerging talents to established stars, there's something for everyone to enjoy.",
  },
  {
    title: "Personalized Recommendations",
    description:
      "Get personalized recommendations tailored to your music taste. Our platform uses advanced algorithms to analyze your listening habits, taking into account factors such as your favorite artists, genres, and listening history. Based on this data, we suggest songs, albums, and playlists that align with your preferences, ensuring that you discover music that resonates with you on a deeper level.",
  },
  {
    title: "Create Your Playlist",
    description:
      "Curate your own playlists and tailor your music experience to suit your mood, activity, or occasion. Whether you're looking for upbeat tunes to energize your workout, soothing melodies to relax after a long day, or nostalgic tracks to evoke memories from the past, you can create playlists for every moment of your life. Mix and match songs from different genres and artists to create the perfect soundtrack for any situation.",
  },
  {
    title: "High-Quality Audio Streaming",
    description:
      "Immerse yourself in the music with our high-quality audio streaming service. Experience every beat, note, and lyric with stunning clarity and depth. Our platform uses cutting-edge technology to deliver crisp, clear sound that enhances your listening experience. Whether you're listening through headphones, speakers, or your smartphone, you'll enjoy studio-quality sound that brings your favorite songs to life like never before.",
  },
  {
    title: "Offline Listening",
    description:
      "Take your music offline and listen to your favorite tracks anytime, anywhere. With our offline listening feature, you can download songs and playlists to your device and enjoy them even when you're not connected to the internet. Whether you're traveling, commuting, or simply out of range, you can still enjoy uninterrupted music playback. Say goodbye to buffering and data restrictions, and hello to music on your terms.",
  },
];


const WhyChoseUs = () => {
  return (
    <div >
      <StickyScroll content={musicContent}>

      </StickyScroll>
      
    </div>
  )
}

export default WhyChoseUs
