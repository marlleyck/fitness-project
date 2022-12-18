import { AvatarType } from './AvatarType';

type ExercisesDay = {
    ['key']: string;
};

type Exercise = {
    title: string;
    day: string;
    exercises_day: ExercisesDay[];
};

export type UserType = {
    name: string;
    email: string;
    password: string;
    exercises: Exercise[];
    avatar: AvatarType;
};
