import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { UserExerciseCard } from './UserExerciseCard';

type UserExercisesProps = {
    openModal: () => void;
};

export const UserExercises = ({ openModal }: UserExercisesProps) => {
    const { isArrived, user } = useContext(AuthContext);

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {isArrived && (
                <>
                    {user!.exercises!.map(exercise => (
                        <UserExerciseCard
                            key={exercise.id}
                            title={exercise.title}
                            openModal={openModal}
                            position={exercise.id}
                        />
                    ))}
                </>
            )}
        </div>
    );
};
