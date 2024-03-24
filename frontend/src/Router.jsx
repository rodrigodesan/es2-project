import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Team from './pages/Team';
import Sobre from './pages/Sobre';
import Recursos from './pages/Recursos';
import Perfil from './pages/Perfil';
import BuscasSalvas from './pages/BuscasSalvas';
import { DashProvider } from './contexts/dashContext';
import { AuthProvider } from './contexts/authContext';

export function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/home" element={<DashProvider><Dashboard /></DashProvider>} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/buscas-salvas" element={<BuscasSalvas />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
