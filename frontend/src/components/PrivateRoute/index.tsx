import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { authorized } = useContext(AuthContext);
    return (
        <>
            {authorized !== null && authorized ? children : <Navigate to="/" />}
        </>
    );
};
