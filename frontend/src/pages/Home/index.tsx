import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { LoginForm } from '../../components/Form/LoginForm';

export const Home = () => {
    const { authorized } = useContext(AuthContext);
    return (
        <div className="w-screen h-screen bg-black-cyan flex items-center justify-center">
            {authorized !== null && !authorized && (
                <>
                    <div className="w-3/4 h-full flex items-center flex-row md:flex-col">
                        <div className="w-full">
                            <aside className="w-full">
                                <h1 className="text-white text-center font-Open_Sans text-6xl font-thin md:text-5xl xs:hidden">
                                    Gym Fitness
                                </h1>
                                <p className="text-white text-base text-center font-Open_Sans font-thin mt-5 xs:hidden">
                                    Seu gerenciador de{' '}
                                    <span className="text-green">treinos</span>{' '}
                                    pessoal!
                                </p>
                            </aside>
                        </div>

                        <LoginForm />
                    </div>
                </>
            )}
        </div>
    );
};
