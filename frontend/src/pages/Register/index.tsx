import { RegisterForm } from '../../components/Form/RegisterForm';

export const Register = () => {
    return (
        <div className="w-screen h-screen bg-black-cyan flex items-center justify-start flex-col">
            <header>
                <h1 className="text-white font-Open_Sans text-6xl font-thin">
                    Gym Fitness
                </h1>
            </header>

            <RegisterForm />
        </div>
    );
};
