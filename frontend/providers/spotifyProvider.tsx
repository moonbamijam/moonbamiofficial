"use client";

import SpotifyPlaylist from "@frontend/components/Spotify";
import { spotifyEmbeds } from "@frontend/ts/constants/spotify-embeds";
import { useState } from "react";

function handleTrackChange(
  setCurrentEmbed: React.Dispatch<
    React.SetStateAction<{ src: string; title: string }>
  >,
) {
  const randomIndex = Math.floor(Math.random() * spotifyEmbeds.length);
  setCurrentEmbed(spotifyEmbeds[randomIndex]);
}
export default function spotifyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentEmbed, setCurrentEmbed] = useState({ src: "", title: "" });

  if (currentEmbed.src === "") {
    console.log(currentEmbed.title);
    handleTrackChange(setCurrentEmbed);
  }

  return { currentEmbed, setCurrentEmbed, children, SpotifyPlaylist };
}
