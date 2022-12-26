import { RegisterForm } from '../../components/Form/RegisterForm';

export const Register = () => {
    return (
        <div className="w-screen h-screen bg-black-cyan flex items-center justify-start flex-col">
            <div className="w-3/4 h-full">
                <RegisterForm />
            </div>
        </div>
    );
};
