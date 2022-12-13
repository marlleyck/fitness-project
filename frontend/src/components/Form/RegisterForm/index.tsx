import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';

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

    return (
        <div className="w-full h-full flex items-center justify-center">
            <form className="w-96 h-4/5 bg-black-cyan shadow-4xl rounded-tr-3xl rounded-bl-3xl flex items-center flex-col pt-5">
                <header className="w-4/5">
                    <h3 className="text-white font-Open_Sans text-4xl font-thin">
                        Sign Up
                    </h3>
                </header>
                <main className="w-full h-full flex items-center justify-start flex-col gap-4 mt-16">
                    {/* ----------- Name input user -------------- */}
                    <div className="w-full flex items-center justify-center relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-11">
                            <RiUser3Fill color="#269A90" />
                        </div>
                        <input
                            className="w-4/5 bg-transparent outline-none text-white pl-6 pr-2 py-2 border 
                            rounded-xl focus:border-purple duration-500"
                            autoComplete="none"
                            type="text"
                            placeholder="Nome"
                            value={nameRegister}
                            onChange={(e: any) =>
                                setNameRegister(e.target.value)
                            }
                        />
                    </div>

                    {/* ----------- Email input user -------------- */}
                    <div className="w-full flex items-center justify-center relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-11">
                            <MdEmail color="#269A90" />
                        </div>
                        <input
                            className="w-4/5 bg-transparent outline-none text-white pl-6 pr-2 py-2 border 
                            rounded-xl focus:border-purple duration-500"
                            autoComplete="none"
                            type="email"
                            placeholder="Email"
                            value={emailRegister}
                            onChange={(e: any) =>
                                setEmailRegister(e.target.value)
                            }
                        />
                    </div>

                    {/* ----------- Password input user -------------- */}
                    <div className="w-full flex items-center justify-center relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-11">
                            <IoMdLock color="#269A90" />
                        </div>
                        <input
                            className="w-4/5 bg-transparent outline-none text-white pl-6 pr-2 py-2 border 
                            rounded-xl focus:border-purple duration-500"
                            autoComplete="none"
                            type="password"
                            placeholder="Senha"
                            value={passwordRegister}
                            onChange={(e: any) =>
                                setPasswordRegister(e.target.value)
                            }
                        />
                    </div>

                    {/* ----------- Confirm Password input user -------------- */}
                    <div className="w-full flex items-center justify-center relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-11">
                            <IoMdLock color="#269A90" />
                        </div>
                        <input
                            className="w-4/5 bg-transparent outline-none text-white pl-6 pr-2 py-2 border 
                            rounded-xl focus:border-purple duration-500"
                            autoComplete="none"
                            type="password"
                            placeholder="Confirmar senha"
                            value={confirmPasswordRegister}
                            onChange={(e: any) =>
                                setConfirmPasswordRegister(e.target.value)
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
            </form>
        </div>
    );
};
