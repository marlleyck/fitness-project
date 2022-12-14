import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import { AuthContext } from '../../../contexts/AuthContext';
import { api } from '../../../services/api';

import { Exercise, UserType } from '../../../@types/UserType';

import { BsFillPatchPlusFill } from 'react-icons/bs';

type ExerciseFormProps = {
    closeModal: () => void;
};

export const ExerciseForm = ({ closeModal }: ExerciseFormProps) => {
    const {
        inputs,
        setInputs,
        exerciseTitle,
        setExerciseTitle,
        exerciseDay,
        setExerciseDay,
    } = useContext(AppContext);

    const { token, user, setUser } = useContext(AuthContext);

    const handleAddExerciseInput = () => {
        if (inputs.length === 6) {
            alert('Você atingiu o número máximo de exercícios!');
            return;
        }

        setInputs([...inputs, '']);
    };

    const handleChangeExerciseInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
    ) => {
        inputs[index] = e.target.value;
        setInputs([...inputs]);
    };

    const sendUserToApi = async () => {
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
        setUser(response.data.updatedUser);
        setExerciseTitle('');
        setExerciseDay('');
        closeModal();
    };

    const handleAddExercise = async () => {
        if (exerciseTitle === '' || exerciseDay === '') {
            alert('Preencha todos os campos!');
            return;
        }

        if (user!.exercises?.length === 6) {
            alert('Você atingiu a quantidade máxima de treinos!');
            closeModal();
            return;
        }

        const allUsersReponse = await api.get('/auth/users', {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        const userArray = allUsersReponse.data.users.map((usu: UserType) => {
            if (usu.email === user!.email) {
                return usu;
            }
        });

        let exerciseId: number;
        const exerciseArray = userArray[0].exercises.map(
            (exercise: Exercise) => {
                if (exercise.title === exerciseTitle) {
                    exerciseId = exercise.id;
                    return true;
                } else {
                    return false;
                }
            },
        );

        const exerciseAlreadyExists = exerciseArray.includes(true);

        if (exerciseAlreadyExists) {
            const exercisesDay = inputs;
            if (user!.exercises) {
                user!.exercises.map(exercise => {
                    if (exercise.id === exerciseId) {
                        exercise.exercises_day = exercisesDay;
                    }
                });
            }
            sendUserToApi();
        } else {
            const exercisesDay = inputs;
            if (user!.exercises) {
                user!.exercises = [
                    ...user!.exercises,
                    {
                        id: user!.exercises.length + 1,
                        title: exerciseTitle,
                        day: exerciseDay,
                        exercises_day: exercisesDay,
                    },
                ];
            }
            sendUserToApi();
        }
    };

    return (
        <form className="w-full h-full relative">
            <div className="w-full h-full flex items-center justify-start flex-col gap-4">
                <div className="w-full">
                    <h3 className="font-['Montserrat'] text-3xl text-center xs:text-xl">
                        Informações
                    </h3>
                </div>
                <div className="w-full flex items-center justify-center flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Titulo"
                        value={exerciseTitle}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setExerciseTitle(e.target.value)
                        }
                        className="w-3/6 p-2 rounded-xl outline-none border focus:border-green duration-500"
                    />
                    <input
                        type="text"
                        placeholder="Dia"
                        value={exerciseDay}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setExerciseDay(e.target.value)
                        }
                        className="w-3/6 p-2 rounded-xl outline-none border focus:border-green duration-500"
                    />
                </div>
                <div className="w-full h-[260px] flex items-start justify-center flex-col gap-2">
                    <div className="w-full">
                        <h3 className="font-['Montserrat'] text-3xl text-center xs:text-xl">
                            Treinos
                        </h3>
                    </div>
                    <div
                        className="w-full pl-[16px] h-[120px] grid items-center justify-center gap-2
                        overflow-y-scroll md2:px-4"
                    >
                        {inputs.map((item: string, index: number) => (
                            <input
                                type="text"
                                key={String(index)}
                                placeholder={`Treino ${index + 1}`}
                                value={item}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => handleChangeExerciseInput(e, index)}
                                className="w-full h-[40px] px-2 rounded-xl outline-none border focus:border-green duration-500"
                            />
                        ))}
                    </div>
                    <div className="w-full h-[30px] flex items-start justify-center mt-2">
                        <BsFillPatchPlusFill
                            size={30}
                            className="cursor-pointer"
                            onClick={handleAddExerciseInput}
                        />
                    </div>
                </div>
                <div className="w-full h-[64px] flex items-center justify-center">
                    <button
                        type="button"
                        className="w-40 p-3 rounded-xl bg-green text-white hover:brightness-75 duration-500 xs3:w-32"
                        onClick={handleAddExercise}
                    >
                        Finalizar
                    </button>
                </div>
            </div>
        </form>
    );
};
