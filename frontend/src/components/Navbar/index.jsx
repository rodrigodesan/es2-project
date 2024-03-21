import React from 'react';

function DashboardNavbar() {
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
                <a className="nav-link active fs-4 fw-bold" aria-current="page" href="#d">Dashboard</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-4" href="#d">Perfil</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-4" href="#d">Busca Salvas</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fs-4" href="#d">Olá, Convidado</a>
              </li>
              <li className="nav-item px-1">
                <button className="btn bt-navbar  rounded-5 px-3 fs-5 border border-dark" type="submit">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function HomeNavbar() {
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
                <a className="nav-link active fs-4 fw-bold" aria-current="page" href="#d">Sobre</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-4" href="#d">Contato</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fs-4" href="#d">Recursos</a>
              </li>
              <li className="nav-item px-1">
                <button className="btn bt-navbar rounded-5 px-3 fs-5 border border-dark" type="submit">Entrar como convidado</button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Navbar({ page }) {
  return page === 'true' ? <HomeNavbar /> : <DashboardNavbar />;
}

export default Navbar;
