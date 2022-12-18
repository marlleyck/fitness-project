import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';

import { BsFillPatchPlusFill } from 'react-icons/bs';

export const ExerciseForm = () => {
    const { user } = useContext(AppContext);

    const [count, setCount] = useState(1);
    const [inputs, setInputs] = useState([0]);

    useEffect(() => {
        if (user) {
            if (user.exercises.length !== 0) {
                let inputsArr = [];
                for (let i = 1; i <= user.exercises.length; i++) {
                    inputsArr.push(i);
                }
                setInputs(inputsArr);
            }
        }
    }, []);

    return (
        <form className="w-full h-full relative">
            <div className="w-full h-full flex items-center justify-start flex-col gap-4">
                <div className="w-full flex items-center justify-center flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Titulo"
                        className="p-2 rounded-xl outline-none border focus:border-green duration-500"
                    />
                    <input
                        type="text"
                        placeholder="Dia"
                        className="p-2 rounded-xl outline-none border focus:border-green duration-500"
                    />
                </div>
                <div className="w-full flex items-center justify-center gap-4">
                    <div className="w-full flex items-center justify-center flex-col">
                        {inputs.map((item, index) => (
                            <input
                                type="text"
                                key={String(index)}
                                placeholder={`Treino ${item + 1}`}
                                className="p-2 rounded-xl outline-none border focus:border-green duration-500"
                            />
                        ))}
                    </div>
                </div>
                <BsFillPatchPlusFill
                    size={30}
                    className="cursor-pointer"
                    onClick={() => {
                        setCount(state => state + 1);
                        setInputs([...inputs, count]);
                    }}
                />
                <button
                    type="button"
                    className="w-1/6 p-3 rounded-xl bg-green text-white hover:brightness-75 duration-500 absolute bottom-0 mb-4"
                >
                    Finalizar
                </button>
            </div>
        </form>
    );
};
