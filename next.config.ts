import { animeGifList } from "@/features/about/anime-gif-list";
import { gameGifList } from "@/features/about/game-gif-list";
import { projects } from "@/shared/constants/projects.db";
import type { NextConfig } from "next";

const allRemotePatternsURL = (src: string[] | URL[]) => {
  const result: URL[] = [];
  src.map((item) => result.push(new URL(item)));
  animeGifList.map((item) => result.push(new URL(item.url)));
  gameGifList.map((item) => result.push(new URL(item.url)));
  projects.map((item) => result.push(new URL(item.src)));

  return result;
};

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: allRemotePatternsURL([
      "https://avatars.githubusercontent.com/u/141120384?v=4",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
      "https://sarahjmwalker.wordpress.com/wp-content/uploads/2014/12/interstellar-2014-poster-wallpaper.jpg",
    ]),
  },
};

export default nextConfig;
