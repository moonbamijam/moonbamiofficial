"use client";

import { useEffect, useState } from "react";

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(false), [isLoading]);

  return { isLoading, setIsLoading };
}
