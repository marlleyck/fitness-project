import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { api } from '../../services/api';

import { BsFillPatchPlusFill } from 'react-icons/bs';

type ExerciseFormProps = {
    closeModal: () => void;
};

export const ExerciseForm = ({ closeModal }: ExerciseFormProps) => {
    const { user, token } = useContext(AppContext);

    const [inputs, setInputs] = useState(['', '']);
    const [exerciseTitle, setExerciseTitle] = useState('');
    const [exerciseDay, setExerciseDay] = useState('');

    /* useEffect(() => {
        if (user) {
            if (user.exercises.length !== 0) {
                let inputsArr = [];
                for (let i = 1; i <= user.exercises.length; i++) {
                    inputsArr.push('');
                }
                setInputs(inputsArr);
            }
        }
    }, []); */

    const addExerciseInput = () => {
        setInputs([...inputs, '']);
    };

    const handleChangeExerciseInput = (e: any, index: number) => {
        inputs[index] = e.target.value;
        setInputs([...inputs]);
    };

    const handleAddExercise = async () => {
        /* console.log(inputs);
        console.log(user); */

        if (exerciseTitle === '' || exerciseDay === '') {
            alert('Preencha todos os campos!');
            return;
        }

        const exercises = inputs;
        if (user) {
            user.exercises = [
                ...user.exercises,
                {
                    title: exerciseTitle,
                    day: exerciseDay,
                    exercises_day: exercises,
                },
            ];
        }

        const response = await api.put(
            '/auth/user',
            {
                user: user,
            },
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        setExerciseTitle('');
        setExerciseDay('');
        closeModal();

        console.log(response.data);
    };

    return (
        <form className="w-full h-full relative">
            <div className="w-full h-full flex items-center justify-start flex-col gap-4">
                <div className="w-full flex items-center justify-center flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Titulo"
                        value={exerciseTitle}
                        onChange={(e: any) => setExerciseTitle(e.target.value)}
                        className="p-2 rounded-xl outline-none border focus:border-green duration-500"
                    />
                    <input
                        type="text"
                        placeholder="Dia"
                        value={exerciseDay}
                        onChange={(e: any) => setExerciseDay(e.target.value)}
                        className="p-2 rounded-xl outline-none border focus:border-green duration-500"
                    />
                </div>
                <div className="w-full flex items-center justify-center gap-4">
                    <div className="w-full grid items-center justify-center grid-cols-2 gap-4 px-4">
                        {inputs.map((item, index) => (
                            <input
                                type="text"
                                key={String(index)}
                                placeholder={`Treino ${index + 1}`}
                                value={item}
                                onChange={(e: any) =>
                                    handleChangeExerciseInput(e, index)
                                }
                                className="p-2 rounded-xl outline-none border focus:border-green duration-500"
                            />
                        ))}
                    </div>
                </div>
                <BsFillPatchPlusFill
                    size={30}
                    className="cursor-pointer"
                    onClick={addExerciseInput}
                />
                <button
                    type="button"
                    className="w-1/6 p-3 rounded-xl bg-green text-white hover:brightness-75 duration-500 absolute bottom-0 mb-4"
                    onClick={handleAddExercise}
                >
                    Finalizar
                </button>
            </div>
        </form>
    );
};
