import React, { ChangeEvent, useEffect, useState } from "react";

const useMatchMedia = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Initial check
    setMatches(mediaQuery.matches);

    // Attach event listener for future changes
    mediaQuery.addEventListener("change", handleChange);

    // Clean up the event listener when component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMatchMedia;
