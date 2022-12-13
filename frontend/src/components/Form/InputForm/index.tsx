import { MdEmail } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import { RiUser3Fill } from 'react-icons/ri'

type LoginInputProps = {
    type: string
    placeholder: string
}

export const InputForm = ({ type, placeholder }: LoginInputProps) => {
    return (
        <div className="w-full flex items-center justify-center relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-11">
                {placeholder === 'Email' && <MdEmail color="#6b54b7" />}
                {type === 'password' && <IoMdLock color="#6b54b7" />}
                {placeholder === 'Nome' && <RiUser3Fill color="#6b54b7" />}
            </div>
            <input
                className="w-4/5 bg-transparent outline-none text-white pl-6 pr-2 py-2 border 
            rounded-xl focus:border-purple duration-500"
                autoComplete="none"
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}
