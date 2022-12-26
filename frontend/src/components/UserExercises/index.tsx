import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { UserExerciseCard } from './UserExerciseCard';

type UserExercisesProps = {
    openModal: () => void;
};

export const UserExercises = ({ openModal }: UserExercisesProps) => {
    const { isArrived, user } = useContext(AuthContext);

    return (
        <div className="w-full grid grid-cols-3 gap-4 md2:grid-cols-2 md2:mt-14 xs2:h-full xs2:grid-cols-1 xs2:overflow-scroll xs2:mt-14">
            {isArrived && (
                <>
                    {user!.exercises!.map(exercise => (
                        <UserExerciseCard
                            key={exercise.id}
                            id={exercise.id}
                            title={exercise.title}
                            day={exercise.day}
                            position={exercise.id}
                            openModal={openModal}
                        />
                    ))}
                </>
            )}
        </div>
    );
};
