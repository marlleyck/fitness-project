import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { ProfileMain } from '../../components/ProfileMain';
import { ProfileHeader } from '../../components/ProfileHeader';

export const Profile = () => {
    const { user, setToken } = useContext(AuthContext);

    useEffect(() => {
        const tokenStorage =
            JSON.parse(localStorage.getItem('@gymfit:token') || '[]') ?? [];

        setToken(tokenStorage);
    }, []);

    return (
        <>
            {user && (
                <div className="w-screen h-screen bg-black-cyan flex items-center justify-center flex-col">
                    <ProfileHeader />
                    <ProfileMain />
                </div>
            )}
        </>
    );
};
