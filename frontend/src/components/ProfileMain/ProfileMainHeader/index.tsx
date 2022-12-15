import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';

import male1 from '../../../assets/img/avatars/male1.png';

export const ProfileMainHeader = () => {
    const { user } = useContext(AppContext);
    return (
        <header className="w-full h-2/6 border-b-4 pb-4 border-solid border-black">
            <div className="w-full h-full flex items-center justify-center flex-col p-4">
                <div className="flex items-center justify-end">
                    <img className="w-24 h-24" src={male1} alt="Male-1" />
                </div>
                <div className="w-full flex items-center flex-col">
                    <h3 className="text-white text-2xl font-Montserrat font-light italic capitalize">
                        {user.name}
                    </h3>
                    <p className="text-white font-Open_Sans font-thin">
                        {user.email}
                    </p>
                    <p className="text-white font-Open_Sans font-thin">
                        Treinos - {user.exercises.length}
                    </p>
                </div>
            </div>
        </header>
    );
};
