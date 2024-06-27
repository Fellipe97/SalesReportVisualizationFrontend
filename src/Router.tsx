import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';


export function Router() {

    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />

            <Route path="*"
                element={<Home />}   
                /* Forçando que todas as rotas digitadas levem ao componente Home, támbem poderia criar uma
                    página(componente) que fale que escreveu a rota invalida e levasse para Home
                */
            />
        </Routes>
    )
}