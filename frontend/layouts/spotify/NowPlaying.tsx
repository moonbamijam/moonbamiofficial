"use client";

import { getNowPlaying } from "@frontend/lib/spotify/spotify-api";
import {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
} from "@frontend/ts/constants/spotify";
import { spotifyNowPlayingType } from "@frontend/ts/types";
import { useEffect, useState } from "react";

export default function NowPlaying() {
  const [spotifyNowPlaying, setSpotifyNowPlaying] =
    useState<spotifyNowPlayingType>({
      albumImageUrl: "",
      artist: "",
      isPlaying: false,
      songUrl: "",
      title: "",
      timePlayed: 0,
      timeTotal: 0,
    });

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setSpotifyNowPlaying(data);
    };

    //The spotify API does not support web sockets, so inorder to keep updating the currently playing song and time elapsed - we call the API every second
    setInterval(() => {
      fetchNowPlaying();
    }, 10000);
  }, []);
  let albumImageUrl = "";
  let artist = "";
  let playerState = "";
  let title = "";
  let secondsPlayed = 0;
  let minutesPlayed = 0;
  let secondsTotal = 0;
  let minutesTotal = 0;

  if (
    spotifyNowPlaying != null &&
    spotifyNowPlaying.title &&
    spotifyNowPlaying.timePlayed &&
    spotifyNowPlaying.timeTotal
  ) {
    //Converting the playback duration from seconds to minutes and seconds
    secondsPlayed = Math.floor(spotifyNowPlaying.timePlayed / 1000);
    minutesPlayed = Math.floor(secondsPlayed / 60);
    secondsPlayed = secondsPlayed % 60;

    //Converting the song duration from seconds to minutes and seconds
    secondsTotal = Math.floor(spotifyNowPlaying.timeTotal / 1000);
    minutesTotal = Math.floor(secondsTotal / 60);
    secondsTotal = secondsTotal % 60;

    title = spotifyNowPlaying.title;
    albumImageUrl = spotifyNowPlaying.albumImageUrl;
    artist = spotifyNowPlaying.artist;
  } else if (spotifyNowPlaying.isPlaying === false) {
    //If the response returns this error message then we print the following text in the widget
    playerState = "OFFLINE";
    title = "User is offline";
    artist = "currently Offline";
  } else {
    //If the response wasn't able to fetch anything then we display this
    title = "Failed to";
    artist = "fetch song";
  }
  return (
    <div className="p-4">
      <h1>Song Title: {title}</h1>
      <h2>Artist: {artist}</h2>
      <p>
        {minutesPlayed}:{secondsPlayed}/{minutesTotal}:{secondsTotal}
      </p>
    </div>
  );
}
