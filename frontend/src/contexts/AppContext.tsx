import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

import { AppContextType } from '../@types/AppContextType';

type AppContextProps = {
    children: JSX.Element;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProps) => {
    const [authorized, setAuthorized] = useState<boolean | null>(null);

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const [nameRegister, setNameRegister] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');

    const handleRegisterUser = async () => {
        const user = {
            name: nameRegister,
            email: emailRegister,
            password: passwordRegister,
            confirmPassword: confirmPasswordRegister,
        };

        const response = await api.post('/register', user);
        console.log(response);
    };

    return (
        <AppContext.Provider
            value={{
                emailLogin,
                setEmailLogin,
                passwordLogin,
                setPasswordLogin,
                nameRegister,
                setNameRegister,
                emailRegister,
                setEmailRegister,
                passwordRegister,
                setPasswordRegister,
                confirmPasswordRegister,
                setConfirmPasswordRegister,
                handleRegisterUser,
                authorized,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
