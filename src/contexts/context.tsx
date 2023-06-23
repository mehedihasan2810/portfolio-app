'use client'
import { createContext, useEffect, useState } from "react";
export type ProviderStates = {
    setSkillConTop: (top: number) => void;
    skillTop: number | null;
    setNavConbottom: (top: number) => void;
    navBottom: number | null;
}
 const AppContext = createContext<ProviderStates | null>(null);

const AppProvider = ({children}: {children: React.ReactNode}) => {
const [skillTop, setSkillTop] = useState<number | null>(null)
const [navBottom, setNavbottom] = useState<number | null>(null)



    function setSkillConTop(top: number) {
        setSkillTop(top)
    }
    function setNavConbottom(bottom: number) {
        setNavbottom(bottom)
    }


    
    return(
     <AppContext.Provider value={{
        setSkillConTop,
        skillTop,
        setNavConbottom,
        navBottom,
     }}>
        {children}
     </AppContext.Provider>
    )
}

export { AppContext, AppProvider };