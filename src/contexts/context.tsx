"use client";
import React, { createContext, useState } from "react";
type ToggleAnimKey = "star" | "hero" | "work";
type ToggleAnim = (toggleKey: ToggleAnimKey, isToggle: boolean) => void; // eslint-disable-line
export type ProviderStates = {
  isStarBgAnimOn: boolean;
  isHeroAnimOn: boolean;
  isWorksAnimOn: boolean;
  toggleAnim: ToggleAnim;
};

const AppContext = createContext<ProviderStates | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  null;

  const [isStarBgAnimOn, setIsStarBgAnimOn] = useState<boolean>(false);
  const [isHeroAnimOn, setIsHeroAnimOn] = useState<boolean>(true);
  const [isWorksAnimOn, setIsWorksAnimOn] = useState<boolean>(false);

  const toggleAnim: ToggleAnim = (toggleKey, isToggle) => {
    if (toggleKey === "star") {
      setIsStarBgAnimOn(isToggle);
    } else if (toggleKey === "hero") {
      setIsHeroAnimOn(isToggle);
    } else {
      setIsWorksAnimOn(isToggle);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isStarBgAnimOn,
        isHeroAnimOn,
        isWorksAnimOn,
        toggleAnim,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
