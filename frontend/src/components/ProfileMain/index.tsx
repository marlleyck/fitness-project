import { useState } from 'react';
import Modal from 'react-modal';

export const ProfileMain = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="w-11/12 h-2/4 bg-black-cyan shadow-4xl flex items-center justify-start flex-col relative">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-modal"
                className="absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 bg-neutral-300 w-1/6 h-96"
            ></Modal>
            <div className="w-full h-full flex items-center justify-center flex-col p-4 relative">
                <div className="flex items-center flex-col absolute top-0 m-3">
                    <button
                        className="w-40 p-3 rounded-xl bg-green text-white hover:brightness-75 duration-500"
                        type="button"
                        onClick={openModal}
                    >
                        Novo treino
                    </button>
                </div>
            </div>
        </div>
    );
};
