export type User = {
    name: string;
    email: string;
    password: string;
    exercises: {
        title: string;
        day: string;
        exercises_day: {
            ['key']: string;
        };
    };
};
