import { UserType } from './UserType';

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
    authorized: boolean | null;
    user: UserType | undefined;
    token: string;
};
