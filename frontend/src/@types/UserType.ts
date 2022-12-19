import { AvatarType } from './AvatarType';

export type Exercise = {
    title: string;
    day: string;
    exercises_day: string[];
};

export type UserType = {
    name: string;
    email: string;
    password: string;
    exercises: Exercise[];
    avatar: AvatarType;
};
