export const ProfileMain = () => {
    return (
        <div className="w-11/12 h-2/4 bg-black-cyan shadow-4xl flex items-center justify-start flex-col">
            <div className="w-full h-full flex items-center justify-center flex-col p-4 relative">
                <div className="flex items-center flex-col absolute top-0 m-3">
                    <button
                        className="w-40 p-3 rounded-xl bg-green text-white hover:brightness-75 duration-500"
                        type="button"
                    >
                        Novo treino
                    </button>
                </div>
            </div>
        </div>
    );
};
