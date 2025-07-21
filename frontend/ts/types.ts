import { Dispatch, SetStateAction } from "react";

export type spotifyEmbedsType = {
  src: string;
  title: string;
};

export type spotifyNowPlayingType = {
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
  timePlayed?: number;
  timeTotal?: number;
  artistUrl?: string;
};

export type spotifyNowPlayingContextType = {
  spotify: {
    spotifyNowPlaying: spotifyNowPlayingType;
    setSpotifyNowPlaying: Dispatch<SetStateAction<spotifyNowPlayingType>>;
  };
};

export type spotifyAccessTokensType = {
  CLIENT_ID: string | undefined;
  CLIENT_SECRET: string | undefined;
  REFRESH_TOKEN: string | undefined;
};
