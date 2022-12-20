import { Exercise } from './UserType';

export type AppContextType = {
    emailLogin: string;
    setEmailLogin: (newState: string) => void;
    passwordLogin: string;
    setPasswordLogin: (newState: string) => void;
    nameRegister: string;
    setNameRegister: (newState: string) => void;
    emailRegister: string;
    setEmailRegister: (newState: string) => void;
    passwordRegister: string;
    setPasswordRegister: (newState: string) => void;
    confirmPasswordRegister: string;
    setConfirmPasswordRegister: (newState: string) => void;
    handleRegisterUser: () => void;
    handleLoginUser: () => void;
    handleModalFillFields: (title: string, openModal: () => void) => void;
    inputs: string[];
    setInputs: (newState: string[]) => void;
    exerciseTitle: string;
    setExerciseTitle: (newState: string) => void;
    exerciseDay: string;
    setExerciseDay: (newState: string) => void;
    handleDeleteExercise: (position: number) => void;
};
