import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { api } from '../../services/api';
import axios from 'axios';

import { AvatarJsonType } from '../../@types/AvatarJsonType';

import Modal from 'react-modal';
import { AiFillCloseCircle } from 'react-icons/ai';

import male1 from '../../assets/img/avatars/male1.png';

Modal.setAppElement('#root');

export const ProfileHeader = () => {
    const { user, token } = useContext(AppContext);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [avatars, setAvatars] = useState<AvatarJsonType>();
    const [avatar, setAvatar] = useState(male1);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleChooseAvatar = async (e: any) => {
        const avatarID = e.target.id;
        let avatarAux = '';

        avatars!.data.map(avatar => {
            if (avatar.id == avatarID) {
                avatarAux = avatar.src;
            }
        });

        /* for (let i = 0; i < avatars!.data.length; i++) {
            if (avatars!.data[i].id == avatarID) {
                avatarAux = avatars!.data[i].src;
            }
        } */

        setAvatar(avatarAux);
        user!.avatar = {
            id: avatarID,
            src: avatarAux,
        };

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

        closeModal();
    };

    useEffect(() => {
        const fetchAvatars = async () => {
            const response = await axios.get('../../../avatars.json', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setAvatars(response.data);

            if (user?.avatar) {
                setAvatar(`../../../${user.avatar.src}`);
            }
        };
        fetchAvatars();
    }, []);

    return (
        <div className="w-11/12 h-1/3 bg-black-cyan shadow-4xl flex items-center justify-start flex-col">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-modal"
                className="absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 
                bg-neutral-300 w-1/6 h-96 rounded-xl outline-none"
            >
                <div className="w-full h-full overflow-scroll overflow-x-hidden flex items-center flex-col gap-2-xl">
                    <header className="w-full pr-2 pt-2 flex items-center justify-end">
                        <AiFillCloseCircle
                            color="black"
                            size={27}
                            cursor="pointer"
                            onClick={closeModal}
                        />
                    </header>
                    <div>
                        {avatars?.data.map(avatar => (
                            <img
                                key={avatar.id}
                                src={avatar.src}
                                className="w-20 cursor-pointer hover:brightness-75"
                                id={String(avatar.id)}
                                onClick={handleChooseAvatar}
                            />
                        ))}
                    </div>
                </div>
            </Modal>

            <header className="w-full h-full border-b-4 pb-4 border-solid border-black">
                <div className="w-full h-full flex items-center justify-center flex-col p-4">
                    <div className="flex items-center justify-center">
                        <img
                            className="w-24 h-24 cursor-pointer hover:brightness-75"
                            src={avatar}
                            alt="Male-1"
                            onClick={openModal}
                        />
                    </div>
                    <div className="w-full flex items-center flex-col">
                        <h3 className="text-white text-2xl font-Montserrat font-light italic capitalize">
                            {user!.name}
                        </h3>
                        <p className="text-white font-Open_Sans font-thin">
                            {user!.email}
                        </p>
                        <p className="text-white font-Open_Sans font-thin">
                            Treinos - {user!.exercises.length}
                        </p>
                    </div>
                </div>
            </header>
        </div>
    );
};
