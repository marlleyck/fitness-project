export const LoginForm = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <form className="w-96 h-96 bg-black bg-black-force rounded-tr-xl rounded-bl-xl flex items-center flex-col  py-2">
                <header className="w-4/5">
                    <h3 className="text-white font-Open_Sans text-4xl">Login</h3>
                </header>
                <main className="w-full h-full flex items-center justify-start flex-col gap-4 mt-16">
                    <div className="w-full flex items-center justify-center">
                        <input 
                        className="w-4/5 bg-transparent outline-none text-white pl-2 py-2 border 
                        rounded-xl"
                        autoComplete="none"
                        type="text" 
                        placeholder="Email" />
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <input
                        className="w-4/5 bg-transparent outline-none text-white pl-2 py-2 border
                        rounded-xl" 
                        type="text" 
                        placeholder="Senha" />
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <button 
                        className="w-4/5 bg-white p-3 rounded-xl"
                        type="button">
                            Login
                        </button>
                    </div>
                </main>
            </form>
        </div>
    )
}