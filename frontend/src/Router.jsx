import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Team from './pages/Team';
import Sobre from './pages/Sobre';
import Recursos from './pages/Recursos';
import Perfil from './pages/Perfil';
import BuscasSalvas from './pages/BuscasSalvas';
import { DashProvider } from './contexts/dashContext';
import { AuthProvider, useAuthContext } from './contexts/authContext';
import { ProfileProvider } from './contexts/profileContext';

function PrivateRoute({ children }) {
  const { authenticated } = useAuthContext();

  if (!authenticated) return <Navigate to="/" />;

  return <ProfileProvider>{children}</ProfileProvider>;
}

export function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route
            path="/home"
            element={(
              <DashProvider>
                <ProfileProvider>
                  <Dashboard />
                </ProfileProvider>
              </DashProvider>
            )}
          />
          <Route path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
          <Route path="/buscas-salvas" element={<PrivateRoute><BuscasSalvas /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
