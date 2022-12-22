import { UserType } from './UserType';

export type AuthContextType = {
    authorized: boolean | null;
    setAuthorized: (newState: boolean) => void;
    token: string;
    setToken: (newState: string) => void;
    user: UserType | undefined;
    setUser: (newState: UserType) => void;
    isArrived: boolean;
    setIsArrived: (newState: boolean) => void;
};
