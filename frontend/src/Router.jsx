import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
