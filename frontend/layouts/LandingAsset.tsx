"use client";

import Picture from "@frontend/components/common/Picture";
import Spotify from "@frontend/components/Spotify";
import { spotifyEmbeds } from "@frontend/ts/constants/spotify-embeds";
import { useState } from "react";

function handleEmbedChange(
  setCurrentEmbed: React.Dispatch<
    React.SetStateAction<{ src: string; title: string }>
  >,
) {
  const randomIndex = Math.floor(Math.random() * spotifyEmbeds.length);
  setCurrentEmbed(spotifyEmbeds[randomIndex]);
}

export default function LandingAsset() {
  const [isSpotifyOpen, setIsSpotifyOpen] = useState(false);
  const [currentEmbed, setCurrentEmbed] = useState({ src: "", title: "" });

  if (currentEmbed.src === "") {
    console.log(currentEmbed.title);
    handleEmbedChange(setCurrentEmbed);
  }

  return (
    <div
      onMouseEnter={() => setIsSpotifyOpen(true)}
      onMouseLeave={() => setIsSpotifyOpen(false)}
      className="relative w-full lg:max-w-[450px] xl:max-w-[550px] min-h-[400px] aspect-square flex items-center justify-center rounded-lg overflow-hidden"
    >
      <Picture
        src="https://avatars.githubusercontent.com/u/141120384?v=4"
        alt="Jam Moonbami"
        isPriority={true}
        className={`${
          isSpotifyOpen ? "brightness-75 dark:brightness-50" : ""
        } shadow`}
      />
      <div
        className={`absolute w-full h-full ${isSpotifyOpen && "backdrop-blur"}`}
      ></div>
      <Spotify
        src={currentEmbed.src}
        title={currentEmbed.title}
        width="80%"
        className={`${isSpotifyOpen ? " opacity-1" : " opacity-0"} absolute`}
      />
    </div>
  );
}
