import { LoginForm } from "../../components/LoginForm"

export const Home = () => {
    return (
        <div className="w-screen h-screen bg-black flex items-center justify-start flex-col">
            <header>
                <h1 className="text-white font-Open_Sans text-6xl">Gen Fitness</h1>
            </header>
            

            <LoginForm />
        </div>
    )
}