import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

import { UserExerciseCard } from './UserExerciseCard';

type UserExercisesProps = {
    openModal: () => void;
};

export const UserExercises = ({ openModal }: UserExercisesProps) => {
    const { user } = useContext(AppContext);
    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {user!.exercises.map((exercise, index) => (
                <UserExerciseCard
                    key={index}
                    title={exercise.title}
                    openModal={openModal}
                />
            ))}
        </div>
    );
};
