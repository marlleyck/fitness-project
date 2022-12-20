import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

import { AuthContextType } from '../@types/AuthContextType';
import { UserType } from '../@types/UserType';

type AuthContextProps = {
    children: JSX.Element;
};

export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType,
);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
    const [user, setUser] = useState<UserType>();

    const [token, setToken] = useState('');
    const [authorized, setAuthorized] = useState<boolean | null>(null);

    const [isArrived, setIsArrived] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const tokenStorage =
                JSON.parse(localStorage.getItem('@gymfit:token') || '[]') ?? [];

            if (typeof tokenStorage === 'string') {
                const response = await api.get('/auth/user', {
                    headers: {
                        authorization: `Bearer ${tokenStorage}`,
                    },
                });
                setAuthorized(true);
                setUser(response.data.user);
                navigate('/profile');
                setToken(tokenStorage);
                setIsArrived(true);
            } else {
                setAuthorized(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authorized,
                setAuthorized,
                token,
                setToken,
                user,
                setUser,
                isArrived,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
