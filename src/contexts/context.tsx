"use client";
import React, { createContext } from "react";

export interface ProviderStates {}

const AppContext = createContext<ProviderStates | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  null;

  return <AppContext.Provider value={""}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
