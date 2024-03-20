import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import { DashProvider } from './contexts/dashContext';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<DashProvider><Dashboard /></DashProvider>} />
      </Routes>
    </BrowserRouter>
  );
}
