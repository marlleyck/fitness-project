import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { authorized } = useContext(AppContext);
    return <>{authorized ? children : <Navigate to="/" />}</>;
};
