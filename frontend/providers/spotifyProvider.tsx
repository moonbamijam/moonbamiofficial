"use client";

import { SpotifyContext } from "@frontend/contexts/SpotifyContext";
// import getNowPlayingItem from "@frontend/lib/spotify/get-now-playing";
import {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
} from "@frontend/ts/constants/spotify";
import { spotifyNowPlayingType } from "@frontend/ts/types";
import { useEffect, useMemo, useState } from "react";

export default function SpotifyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [spotifyNowPlaying, setSpotifyNowPlaying] =
    useState<spotifyNowPlayingType>({
      albumImageUrl: "",
      artist: "",
      isPlaying: false,
      songUrl: "",
      title: "",
    });

  // useEffect(() => {
  //   Promise.all([
  //     getNowPlayingItem({
  //       CLIENT_ID,
  //       CLIENT_SECRET,
  //       REFRESH_TOKEN,
  //     }),
  //   ]).then((results) => {
  //     setSpotifyNowPlaying((spotifyNowPlaying) => ({
  //       ...spotifyNowPlaying,
  //       ...results[0],
  //     }));
  //   });
  // });

  const value = useMemo(() => {
    return {
      spotify: { spotifyNowPlaying, setSpotifyNowPlaying },
    };
  }, [spotifyNowPlaying]);

  return (
    <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
  );
}
