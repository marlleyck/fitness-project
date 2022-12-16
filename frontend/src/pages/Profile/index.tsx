import { useContext } from 'react';
import { ProfileMain } from '../../components/ProfileMain';
import { ProfileHeader } from '../../components/ProfileHeader';
import { AppContext } from '../../contexts/AppContext';

export const Profile = () => {
    const { user } = useContext(AppContext);
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
