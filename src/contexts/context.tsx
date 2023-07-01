"use client";
import { createContext, useEffect, useState, useLayoutEffect } from "react";
export type ProviderStates = {
  setSkillConTop: (top: number) => void;
  skillTop: number | null;
  setNavConbottom: (top: number) => void;
  navBottom: number | null;
  documentScrollTop: number;
  clientX: number;
  clientY: number;
};
const AppContext = createContext<ProviderStates | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [skillTop, setSkillTop] = useState<number | null>(null);
  const [navBottom, setNavbottom] = useState<number | null>(null);
  const [documentScrollTop, setDocumentScrollTop] = useState<number>(0);
  const [clientX, setClientX] = useState<number>(0);
  const [clientY, setClientY] = useState<number>(0);

  function setSkillConTop(top: number) {
    setSkillTop(top);
  }
  function setNavConbottom(bottom: number) {
    setNavbottom(bottom);
  }

  useLayoutEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      event.stopPropagation();
      setClientX(event.clientX);
      setClientY(event.clientY);
    }

    document.addEventListener("pointermove", handlePointerMove);

    function handleScroll(event: Event) {
      event.stopPropagation();

      const documentScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setDocumentScrollTop(documentScrollTop);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        setSkillConTop,
        skillTop,
        setNavConbottom,
        navBottom,
        documentScrollTop,
        clientX,
        clientY,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
