import { useContext } from "react";
import { AppContext, ProviderStates } from "./context";

export const useGlobalContext = (): ProviderStates => {
  const globalContext = useContext(AppContext);

  if (globalContext === null) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }

  return globalContext;
};
