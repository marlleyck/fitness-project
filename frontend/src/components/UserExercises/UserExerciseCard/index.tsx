import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';

import { IoMdTrash } from 'react-icons/io';

type UserExerciseCardProps = {
    id: number;
    title: string;
    day: string;
    position: number;
    openModal: () => void;
};

export const UserExerciseCard = ({
    id,
    title,
    day,
    position,
    openModal,
}: UserExerciseCardProps) => {
    const { handleModalFillFields, handleDeleteExercise } =
        useContext(AppContext);

    return (
        <div
            className="w-full h-16 flex items-center justify-center bg-green bg-gray-400 
            rounded-md bg-clip-padding backdrop-filter 
            backdrop-blur-sm bg-opacity-50 border border-gray-100 cursor-pointer 
            hover:border-green hover:brightness-90 duration-500"
        >
            <div
                className="w-full h-full flex items-center justify-center"
                onClick={() => handleModalFillFields(id, openModal)}
            >
                <h3 className="text-white font-['Montserrat'] ml-7 xs2:hidden">
                    {title} - {day}
                </h3>
                <div className="hidden ml-7 xs2:block">
                    <div>
                        <h3 className="text-white font-['Montserrat'] md2:text-center">
                            {title}
                        </h3>
                    </div>
                    <div>
                        <h3 className="text-white font-['Montserrat'] md2:text-center">
                            {'('}
                            {day}
                            {')'}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer">
                <IoMdTrash
                    size={28}
                    color="#A70000"
                    onClick={() => handleDeleteExercise(position)}
                />
            </div>
        </div>
    );
};
