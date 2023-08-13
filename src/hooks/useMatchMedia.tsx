import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

const useMatchMedia = (query: string) => {
  const [matches, setMatches] = useState(false);

  useIsomorphicLayoutEffect(() => {
    // if(typeof window !== 'undefined'){
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
      window.isMediumDevice = event.matches;
    };

    // Initial check
    setMatches(mediaQuery.matches);
    window.isMediumDevice = mediaQuery.matches;
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
