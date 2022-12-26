import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

import { RiUser3Fill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';

export const RegisterForm = () => {
    const {
        nameRegister,
        setNameRegister,
        emailRegister,
        setEmailRegister,
        passwordRegister,
        setPasswordRegister,
        confirmPasswordRegister,
        setConfirmPasswordRegister,
        handleRegisterUser,
    } = useContext(AppContext);

    const { authorized } = useContext(AuthContext);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <>
                {authorized !== null && !authorized && (
                    <form className="w-96 h-3/4 bg-black-cyan shadow-4xl rounded-tr-3xl rounded-bl-3xl flex items-center flex-col pt-5">
                        <header className="w-4/5">
                            <h3 className="text-white font-Open_Sans text-4xl font-thin">
                                Sign Up
                            </h3>
                        </header>
                        <main className="w-full h-full flex items-center justify-start flex-col gap-4 mt-16">
                            {/* ----------- Name input user -------------- */}
                            <div
                                className="w-4/5 flex items-center justify-center border rounded-xl 
                                focus-within:border-green duration-500"
                            >
                                <div className="ml-2">
                                    <RiUser3Fill color="#269A90" />
                                </div>
                                <input
                                    className="w-full bg-transparent outline-none text-white pl-2 pr-2 py-2"
                                    autoComplete="none"
                                    type="text"
                                    placeholder="Nome"
                                    value={nameRegister}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) => setNameRegister(e.target.value)}
                                />
                            </div>

                            {/* ----------- Email input user -------------- */}
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
                                    value={emailRegister}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) => setEmailRegister(e.target.value)}
                                />
                            </div>

                            {/* ----------- Password input user -------------- */}
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
                                    value={passwordRegister}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) => setPasswordRegister(e.target.value)}
                                />
                            </div>

                            {/* ----------- Confirm Password input user -------------- */}
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
                                    placeholder="Confirmar senha"
                                    value={confirmPasswordRegister}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) =>
                                        setConfirmPasswordRegister(
                                            e.target.value,
                                        )
                                    }
                                />
                            </div>

                            {/* ----------- Button Register user -------------- */}
                            <div className="w-full flex items-center justify-center">
                                <button
                                    className="w-4/5 p-3 rounded-xl bg-green text-white hover:brightness-75 duration-500"
                                    type="button"
                                    onClick={handleRegisterUser}
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </main>
                        <footer className="w-full h-full flex items-center justify-center">
                            <Link
                                to="/"
                                className="cursor-pointer brightness-125 text-green texts-base hover:brightness-95 duration-300"
                            >
                                Ir para Login
                            </Link>
                        </footer>
                    </form>
                )}
            </>
        </div>
    );
};
