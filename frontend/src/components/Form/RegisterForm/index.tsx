import { InputForm } from '../InputForm'

export const RegisterForm = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <form className="w-96 h-4/5 bg-black-force rounded-tr-3xl rounded-bl-3xl flex items-center flex-col pt-5">
                <header className="w-4/5">
                    <h3 className="text-white font-Open_Sans text-4xl font-thin">
                        Sign Up
                    </h3>
                </header>
                <main className="w-full h-full flex items-center justify-start flex-col gap-4 mt-16">
                    <InputForm type="text" placeholder="Nome" />

                    <InputForm type="text" placeholder="Email" />

                    <InputForm type="password" placeholder="Senha" />

                    <InputForm type="password" placeholder="Confirmar senha" />

                    <div className="w-full flex items-center justify-center">
                        <button
                            className="w-4/5 p-3 rounded-xl bg-purple text-white hover:brightness-75 duration-500"
                            type="button"
                        >
                            Cadastrar
                        </button>
                    </div>
                </main>
            </form>
        </div>
    )
}
