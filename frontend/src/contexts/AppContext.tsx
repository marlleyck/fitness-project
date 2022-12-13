import { createContext } from "react";

type AppContextType = {

}

type AppContextProps = {
    children: JSX.Element
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppContextProvider = ({ children }: AppContextProps) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
} 