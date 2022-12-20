import { AvatarType } from './AvatarType';

export type Exercise = {
    id: number;
    title: string;
    day: string;
    exercises_day: string[];
};

export type UserType = {
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    exercises?: Exercise[] | undefined;
    avatar?: AvatarType | undefined;
};
