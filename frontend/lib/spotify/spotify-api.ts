import {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
} from "@frontend/ts/constants/spotify";
import { spotifyNowPlayingType } from "@frontend/ts/types";
import querystring from "querystring";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

const SPOTIFY_BASE_TRACK = {
  albumImageUrl: "",
  artist: "",
  isPlaying: false,
  songUrl: "",
  title: "",
  timePlayed: 0,
  timeTotal: 0,
  artistUrl: "",
};

const getAccessToken = async () => {
  try {
    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
      "base64",
    );

    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "REFRESH_TOKEN",
        REFRESH_TOKEN: REFRESH_TOKEN,
      }),
    });

    return response.json();
  } catch (error) {
    console.error("Error in getAccessToken:", error);
    throw new Error("Failed to get access token");
  }
};

export const getNowPlaying = async (): Promise<spotifyNowPlayingType> => {
  try {
    const { access_token } = await getAccessToken();
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    switch (response?.status) {
      case 204:
        console.log("Spotify API: No song is currently playing.");
        return SPOTIFY_BASE_TRACK;
      case 401:
        console.log("Spotify API: Unauthorized. Check your access tokens.");
        return SPOTIFY_BASE_TRACK;
      default:
        if (!response.ok) console.log("Listening to currently playing");
        break;
    }

    const song = await response?.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists
      .map((_artist: { name: string }) => _artist.name)
      .join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl,
    };
  } catch (error) {
    console.error("Error in getNowPlaying:", error);
    return SPOTIFY_BASE_TRACK;
  }
};
