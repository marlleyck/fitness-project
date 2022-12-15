import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { AppContextProvider } from './contexts/AppContext';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register';

const AppRoutes = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default AppRoutes;
