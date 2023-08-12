"use client";
import { createContext, useEffect, useState, useLayoutEffect } from "react";
type ToggleAnimKey = 'star' | 'hero' | 'work';
type ToggleAnim = (toggleKey: ToggleAnimKey, isToggle: boolean) => void;
export type ProviderStates = {
  showCursorElement: () => void;
  hideCursorElement: () => void;
  documentScrollTop: number;
  clientX: number;
  clientY: number;
  isCursorHide: boolean;
  isStarBgAnimOn: boolean;
  isHeroAnimOn: boolean;
  isWorksAnimOn: boolean;
  toggleAnim: ToggleAnim;
};




const AppContext = createContext<ProviderStates | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [skillTop, setSkillTop] = useState<number | null>(null);
  const [navBottom, setNavbottom] = useState<number | null>(null);
  const [documentScrollTop, setDocumentScrollTop] = useState<number>(0);
  const [clientX, setClientX] = useState<number>(0);
  const [clientY, setClientY] = useState<number>(0);
  const [isCursorHide, setIsCursorHide] = useState<boolean>(false);
  const [isStarBgAnimOn, setIsStarBgAnimOn] = useState<boolean>(false);
  const [isHeroAnimOn, setIsHeroAnimOn] = useState<boolean>(true);
  const [isWorksAnimOn, setIsWorksAnimOn] = useState<boolean>(false);

 function showCursorElement() {
  setIsCursorHide(true)
 }
 function hideCursorElement() {
  setIsCursorHide(false)
 }

 const toggleAnim: ToggleAnim = (toggleKey, isToggle ) => {
    if(toggleKey === 'star'){
      setIsStarBgAnimOn(isToggle)
    }else if(toggleKey === 'hero'){
      setIsHeroAnimOn(isToggle)
    }else{
      setIsWorksAnimOn(isToggle)
    }
 }
  

  useEffect(() => {


    
    function handlePointerMove(event: PointerEvent) {
      event.stopPropagation();
      setClientX(event.clientX);
      setClientY(event.clientY);
    }

    // window.addEventListener("pointermove", handlePointerMove);

    // function handleScroll(event: Event) {
    //   event.stopPropagation();

    //   const documentScrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop;
    //   setDocumentScrollTop(documentScrollTop);
    // }

    // window.addEventListener("scroll", handleScroll);

    return () => {
      // window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        showCursorElement,
        hideCursorElement,
        isCursorHide,
        documentScrollTop,
        clientX,
        clientY,
        isStarBgAnimOn,
        isHeroAnimOn,
        isWorksAnimOn,
        toggleAnim
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
