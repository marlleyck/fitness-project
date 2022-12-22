import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

import { AppContextType } from '../@types/AppContextType';
import { Exercise } from '../@types/UserType';

type AppContextProps = {
    children: JSX.Element;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProps) => {
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const [nameRegister, setNameRegister] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');

    const [inputs, setInputs] = useState(['', '']);
    const [exerciseTitle, setExerciseTitle] = useState('');
    const [exerciseDay, setExerciseDay] = useState('');

    const { user, setUser, setAuthorized, setIsArrived, token } =
        useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegisterUser = async () => {
        const userRegister = {
            name: nameRegister,
            email: emailRegister,
            password: passwordRegister,
            confirmPassword: confirmPasswordRegister,
        };

        await api.post('/register', userRegister);

        navigate('/');

        setNameRegister('');
        setEmailRegister('');
        setPasswordRegister('');
        setConfirmPasswordRegister('');
    };

    const handleLoginUser = async () => {
        const userLogin = {
            email: emailLogin,
            password: passwordLogin,
        };

        try {
            const responseToken = await api.post('/auth/user', userLogin);
            const token = responseToken.data.token;

            localStorage.setItem('@gymfit:token', JSON.stringify(token));

            const response = await api.get('/auth/user', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            setUser(response.data.user);
            setAuthorized(true);
            setIsArrived(true);
            navigate('/profile');

            setEmailLogin('');
            setPasswordLogin('');
        } catch (e) {
            console.log(e);
        }
    };

    const handleLogoutUser = () => {
        const responseConfirm = confirm('Deseja realmente sair?');
        if (responseConfirm) {
            localStorage.removeItem('@gymfit:token');
            setAuthorized(false);
        }
    };

    const handleDeleteExercise = async (position: number) => {
        const userExercises: Exercise[] = user!.exercises!;

        let filteredExercises = userExercises.filter(exercise => {
            if (exercise.id !== position) {
                return exercise;
            }
        });

        const newUser = { ...user, exercises: filteredExercises };

        const response = await api.put(
            '/auth/user',
            {
                user: newUser,
            },
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        setUser(response.data.updatedUser);
    };

    const handleModalFillFields = (id: number, openModal: () => void) => {
        user!.exercises!.map(exercise => {
            if (exercise.id === id) {
                if (user!.exercises!.length !== 0) {
                    let inputsArr: string[] = [];
                    exercise.exercises_day.forEach(exerciseDay => {
                        inputsArr.push(exerciseDay);
                    });

                    setInputs(inputsArr);
                    setExerciseTitle(exercise.title);
                    setExerciseDay(exercise.day);
                    openModal();
                }
            }
        });
    };

    return (
        <AppContext.Provider
            value={{
                emailLogin,
                setEmailLogin,
                passwordLogin,
                setPasswordLogin,
                nameRegister,
                setNameRegister,
                emailRegister,
                setEmailRegister,
                passwordRegister,
                setPasswordRegister,
                confirmPasswordRegister,
                setConfirmPasswordRegister,
                handleRegisterUser,
                handleLoginUser,
                handleLogoutUser,
                handleModalFillFields,
                inputs,
                setInputs,
                exerciseTitle,
                setExerciseTitle,
                exerciseDay,
                setExerciseDay,
                handleDeleteExercise,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
