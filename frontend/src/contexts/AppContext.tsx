import { createContext, useState } from "react";

import { AppContextType } from "../@types/AppContextType";

type AppContextProps = {
    children: JSX.Element
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppContextProvider = ({ children }: AppContextProps) => {
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')

    return (
        <AppContext.Provider value={{ emailLogin, setEmailLogin, passwordLogin, setPasswordLogin }}>
            {children}
        </AppContext.Provider>
    )
} 