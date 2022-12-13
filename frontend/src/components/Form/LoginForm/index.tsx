import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import { Link } from 'react-router-dom';

import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';

export const LoginForm = () => {
    const { emailLogin, setEmailLogin, passwordLogin, setPasswordLogin } =
        useContext(AppContext);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <form className="w-96 h-96 bg-black bg-black-force rounded-tr-3xl rounded-bl-3xl flex items-center flex-col pt-5">
                <header className="w-4/5">
                    <h3 className="text-white font-Open_Sans text-4xl font-thin">
                        Login
                    </h3>
                </header>
                <main className="w-full h-full flex items-center justify-start flex-col gap-4 mt-16">
                    {/* ----------- Email input user -------------- */}
                    <div className="w-full flex items-center justify-center relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-11">
                            <MdEmail color="#6b54b7" />
                        </div>
                        <input
                            className="w-4/5 bg-transparent outline-none text-white pl-6 pr-2 py-2 border 
                            rounded-xl focus:border-purple duration-500"
                            autoComplete="none"
                            type="email"
                            placeholder="Email"
                            value={emailLogin}
                            onChange={(e: any) => setEmailLogin(e.target.value)}
                        />
                    </div>

                    {/* ----------- Password input user -------------- */}
                    <div className="w-full flex items-center justify-center relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-11">
                            <IoMdLock color="#6b54b7" />
                        </div>
                        <input
                            className="w-4/5 bg-transparent outline-none text-white pl-6 pr-2 py-2 border 
                            rounded-xl focus:border-purple duration-500"
                            autoComplete="none"
                            type="password"
                            placeholder="Senha"
                            value={passwordLogin}
                            onChange={(e: any) =>
                                setPasswordLogin(e.target.value)
                            }
                        />
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <button
                            className="w-4/5 p-3 rounded-xl bg-purple text-white hover:brightness-75 duration-500"
                            type="button"
                        >
                            Login
                        </button>
                    </div>

                    <div>
                        <p className="text-white font-thin">
                            Não tem uma conta ainda?{' '}
                            <Link
                                to="/register"
                                className="text-purple font-normal cursor-pointer underline-none hover:underline"
                            >
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </main>
            </form>
        </div>
    );
};
