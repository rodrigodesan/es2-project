import React from 'react';
import { Link } from 'react-router-dom';

function DashboardNavbar({ activePage }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbarColor fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand pt-0 pb-0 logo" href="/home"><img src="./src/assets/logo/logo.png" alt="s" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="navbar-item px-3 ">
                <Link className={`nav-link fs-4 ${activePage === 'dashboard' ? 'active fw-bold' : ''}`} aria-current="page" to="/home">Dashboard</Link>
              </li>
              <li className="nav-item px-3">
                <Link className={`nav-link fs-4 ${activePage === 'perfil' ? 'active fw-bold' : ''}`} to="/perfil">Perfil</Link>
              </li>
              <li className="nav-item px-3">
                <Link className={`nav-link fs-4 ${activePage === 'buscas-salvas' ? 'active fw-bold' : ''}`} to="/buscas-salvas">Busca Salvas</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link fs-4" to="/perfil">Olá, Convidado</Link>
              </li>
              <li className="nav-item px-1">
                <Link to="/"><button className="btn bt-navbar  rounded-5 px-3 fs-5 border border-dark" type="submit">Logout</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function HomeNavbar({ activePage }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbarColor fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand pt-0 pb-0 logo" to="/"><img src="./src/assets/logo/logo.png" alt="s" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="navbar-item px-3">
                <Link className={`nav-link fs-4  ${activePage === 'sobre' ? 'active fw-bold' : ''}`} to="/sobre">Sobre</Link>
              </li>
              <li className="navbar-item px-3">
                <Link className={`nav-link fs-4  ${activePage === 'team' ? 'active fw-bold' : ''}`} to="/team">Team</Link>
              </li>
              <li className="navbar-item px-3">
                <Link className={`nav-link fs-4 ${activePage === 'recursos' ? 'active fw-bold' : ''}`} to="/recursos">Recursos</Link>
              </li>
              <li className="navbar-item px-1">
                <Link to="/home">
                  <button className="btn bt-navbar rounded-5 px-3 fs-5 border border-dark" type="submit">Entrar como convidado</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Navbar({ page, activePage }) {
  return page === 'true' ? <HomeNavbar activePage={activePage} /> : <DashboardNavbar activePage={activePage} />;
}

export default Navbar;
