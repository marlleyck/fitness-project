import { AppContextProvider } from './contexts/AppContext';
import AppRoutes from './routes';

function App() {
    return (
        <AppContextProvider>
            <AppRoutes />
        </AppContextProvider>
    );
}

export default App;
