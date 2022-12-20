import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { AppContextProvider } from './contexts/AppContext';
import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <AppContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <Profile />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </AppContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    );
};

export default AppRoutes;
