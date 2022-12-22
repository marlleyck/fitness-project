import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import { Link } from 'react-router-dom';

import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';

export const LoginForm = () => {
    const {
        emailLogin,
        setEmailLogin,
        passwordLogin,
        setPasswordLogin,
        handleLoginUser,
    } = useContext(AppContext);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <form className="w-96 h-96 bg-black-cyan shadow-4xl rounded-tr-3xl rounded-bl-3xl flex items-center flex-col pt-5">
                <header className="w-4/5">
                    <h3 className="text-white font-Open_Sans text-4xl font-thin">
                        Login
                    </h3>
                </header>
                <main className="w-full h-full flex items-center justify-start flex-col gap-4 mt-16">
                    {/* ----------- Email - user input -------------- */}
                    <div
                        className="w-4/5 flex items-center justify-center border rounded-xl 
                        focus-within:border-green duration-500"
                    >
                        <div className="ml-2">
                            <MdEmail color="#269A90" />
                        </div>
                        <input
                            className="w-full bg-transparent outline-none text-white pl-2 pr-2 py-2"
                            autoComplete="none"
                            type="email"
                            placeholder="Email"
                            value={emailLogin}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setEmailLogin(e.target.value)}
                        />
                    </div>

                    {/* ----------- Password - user input -------------- */}
                    <div
                        className="w-4/5 flex items-center justify-center border rounded-xl
                        focus-within:border-green duration-500"
                    >
                        <div className="ml-2">
                            <IoMdLock color="#269A90" />
                        </div>
                        <input
                            className="w-full bg-transparent outline-none text-white pl-2 pr-2 py-2"
                            autoComplete="none"
                            type="password"
                            placeholder="Senha"
                            value={passwordLogin}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => setPasswordLogin(e.target.value)}
                        />
                    </div>

                    {/* ----------- User login button -------------- */}
                    <div className="w-full flex items-center justify-center">
                        <button
                            onClick={handleLoginUser}
                            className="w-4/5 p-3 rounded-xl bg-green text-white hover:brightness-75 duration-500"
                            type="button"
                        >
                            Login
                        </button>
                    </div>

                    <div>
                        <p className="text-white font-thin text-center">
                            Não tem uma conta ainda?{' '}
                            <Link
                                to="/register"
                                className="text-#269A90 font-normal cursor-pointer underline-none hover:underline"
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
