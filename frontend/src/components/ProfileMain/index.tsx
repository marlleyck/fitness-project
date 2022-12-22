import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';

import { ExerciseForm } from '../Form/ExerciseForm';
import { UserExercises } from '../UserExercises';

import Modal from 'react-modal';
import { AiFillCloseCircle } from 'react-icons/ai';

export const ProfileMain = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { setExerciseTitle, setExerciseDay, setInputs } =
        useContext(AppContext);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setExerciseDay('');
        setExerciseTitle('');
        setInputs(['', '']);
        setModalIsOpen(false);
    };

    return (
        <div className="w-11/12 h-2/4 bg-black-cyan shadow-4xl flex items-center justify-start flex-col relative">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-modal"
                className="absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 
                bg-neutral-300 w-3/5 h-2/3 rounded-xl outline-none"
            >
                <div className="w-full h-full flex items-center flex-col gap-2-xl">
                    <header className="w-full pr-2 pt-2 flex items-center justify-end">
                        <AiFillCloseCircle
                            color="black"
                            size={27}
                            cursor="pointer"
                            onClick={closeModal}
                        />
                    </header>
                    <ExerciseForm closeModal={closeModal} />
                </div>
            </Modal>

            <div className="w-full h-full flex items-center justify-center flex-col p-4 relative">
                <div className="flex items-center flex-col absolute top-0 m-3">
                    <button
                        className="w-40 p-3 rounded-xl bg-green text-white hover:brightness-75 duration-500 outline-none"
                        type="button"
                        onClick={openModal}
                    >
                        Novo treino
                    </button>
                </div>

                <UserExercises openModal={openModal} />
            </div>
        </div>
    );
};
