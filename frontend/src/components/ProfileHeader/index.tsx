import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { AppContext } from '../../contexts/AppContext';
import { api } from '../../services/api';
import axios from 'axios';

import { AvatarJsonType } from '../../@types/AvatarJsonType';

import Modal from 'react-modal';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaPowerOff } from 'react-icons/fa';
import ReactLoading from 'react-loading';

import male1 from '../../assets/img/avatars/male1.png';

Modal.setAppElement('#root');

export const ProfileHeader = () => {
    const { token, user, isArrived } = useContext(AuthContext);
    const { handleLogoutUser } = useContext(AppContext);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [avatars, setAvatars] = useState<AvatarJsonType>();
    const [avatar, setAvatar] = useState<string | null>(null);

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

        setAvatar(avatarAux);
        user!.avatar = {
            id: avatarID,
            src: avatarAux,
        };

        await api.put(
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

            if (user!.avatar) {
                setAvatar(`../../../${user!.avatar.src}`);
            } else {
                setAvatar(male1);
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
                {isArrived && (
                    <>
                        <div className="w-full h-full flex items-center justify-center flex-col p-4 relative">
                            <div className="w-36 flex items-center justify-center absolute top-0 right-0 mr-4 mt-4">
                                <button
                                    className="w-full p-3 rounded-xl bg-green text-white hover:brightness-75 duration-500 
                                    xs:hidden"
                                    type="button"
                                    onClick={handleLogoutUser}
                                >
                                    Logout
                                </button>
                                <div className="hidden w-full xs:block xs:flex xs:items-center xs:justify-end">
                                    <FaPowerOff
                                        color="white"
                                        size={26}
                                        onClick={handleLogoutUser}
                                    />
                                </div>
                            </div>
                            {avatar ? (
                                <>
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="w-24 h-24 cursor-pointer hover:brightness-75 duration-200"
                                            src={avatar}
                                            onClick={openModal}
                                        />
                                    </div>
                                    <div className="w-full flex items-center flex-col">
                                        <h3 className="text-white text-center text-2xl font-Montserrat font-light italic capitalize">
                                            {user!.name}
                                        </h3>
                                        <p className="text-white font-Open_Sans font-thin">
                                            {user!.email}
                                        </p>
                                        <p className="text-white font-Open_Sans font-thin">
                                            Treinos - {user!.exercises?.length}
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <ReactLoading type="spin" className="h-24" />
                            )}
                        </div>
                    </>
                )}
            </header>
        </div>
    );
};
