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
    authorized: boolean | null;
};
