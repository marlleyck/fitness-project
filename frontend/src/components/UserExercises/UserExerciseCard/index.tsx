import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';

type UserExerciseCardProps = {
    title: string;
    openModal: () => void;
};

export const UserExerciseCard = ({
    title,
    openModal,
}: UserExerciseCardProps) => {
    const { handleModalFillFields } = useContext(AppContext);

    return (
        <div
            className="w-full h-16 flex items-center justify-center bg-green bg-gray-400 rounded-md bg-clip-padding backdrop-filter 
            backdrop-blur-sm bg-opacity-50 border border-gray-100 cursor-pointer hover:border-green hover:brightness-90 duration-500"
            onClick={() => handleModalFillFields(title, openModal)}
        >
            <h3 className="text-white font-['Montserrat']">{title}</h3>
        </div>
    );
};
