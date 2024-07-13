"use client";

import { useEffect, useState } from "react";
import { Quotes } from "@lib/quotes";
import Quote from "./Quote";

export default function RandomizeQuote() {
  const [newQuote, setNewQuote] = useState({
    quote: "",
    author: "",
  });
  const [isMounted, setIsMounted] = useState(false);

  const generateRandomQuote = () => {
    for (let i = 0; i < Quotes.length; i++) {
      let j = Math.floor(Math.random() * Quotes.length);
      setNewQuote({
        ...newQuote,
        quote: Quotes[j].quote,
        author: Quotes[j].author,
      });
    }
  };

  useEffect(() => {
    setIsMounted(true);
    generateRandomQuote();
  }, []);

  return (
    <Quote
      quote={newQuote.quote}
      author={newQuote.author}
      className={`${isMounted ? "" : "opacity-0"} text-center xl:text-left`}
    />
  );
}
