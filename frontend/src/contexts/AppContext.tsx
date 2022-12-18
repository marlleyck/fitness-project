import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

import { AppContextType } from '../@types/AppContextType';
import { UserType } from '../@types/UserType';

type AppContextProps = {
    children: JSX.Element;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProps) => {
    const [authorized, setAuthorized] = useState<boolean | null>(null);
    const [user, setUser] = useState<UserType>();

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const [nameRegister, setNameRegister] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');
    const navigate = useNavigate();

    const handleRegisterUser = async () => {
        const userRegister = {
            name: nameRegister,
            email: emailRegister,
            password: passwordRegister,
            confirmPassword: confirmPasswordRegister,
        };

        const response = await api.post('/register', userRegister);
        console.log(response);
    };

    const handleLoginUser = async () => {
        const userLogin = {
            email: emailLogin,
            password: passwordLogin,
        };

        try {
            const responseToken = await api.post('/auth/user', userLogin);
            const token = responseToken.data.token;

            localStorage.setItem('@gymfit:token', JSON.stringify(token));

            const response = await api.get('/auth/user', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            setUser(response.data.user);
            setAuthorized(true);
            navigate('/profile');
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            const tokenStorage =
                JSON.parse(localStorage.getItem('@gymfit:token') || '[]') ?? [];

            console.log(tokenStorage);
            if (typeof tokenStorage === 'string') {
                const response = await api.get('/auth/user', {
                    headers: {
                        authorization: `Bearer ${tokenStorage}`,
                    },
                });

                setAuthorized(true);
                setUser(response.data.user);
                navigate('/profile');
            } else {
                setAuthorized(false);
            }
        };

        fetchUser();
    }, []);

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
                handleLoginUser,
                authorized,
                user,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
