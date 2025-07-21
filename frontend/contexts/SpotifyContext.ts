import React from "react";
import { spotifyNowPlayingContextType } from "@frontend/ts/types";

export const SpotifyContext = React.createContext(
  {} as spotifyNowPlayingContextType,
);
