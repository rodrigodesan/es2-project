import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SaveSearchs from '../../components/SaveSearchs';
import EditProfile from '../../components/EditProfile';

function Perfil() {
  const [modoEdicao, setModoEdicao] = useState(false);

  const toggleModoEdicao = () => {
    setModoEdicao(!modoEdicao);
  };

  const dados = [
    { title: 'Processos por estados' },
    { title: 'Média de duração da vigência' },
    { title: 'Média de duração da vigência por estados' },
    { title: 'Processos por recursos' },
    { title: 'Média de valor do tempo por estados' },
  ];

  return (
    <div>
      <Navbar page="false" activePage="perfil" />
      <div className="container-fluid login-space font1">
        <div className="row">
          {modoEdicao ? (
            <EditProfile toggleModoEdicao={toggleModoEdicao} />
          ) : (
            <div className="col-3 border border-1 border-black pt-5 text-center position-fixed vh-100">
              <p role="presentation" className="settings p-0" onClick={toggleModoEdicao}>
                <span><img src="./src/assets/icons/settings.png" alt="" /></span>
              </p>
              <img className="profile-img rounded-circle w-75" src="./src/assets/images/profile-teste.jpg" alt="profile_image" />
              <h3 className="text-center mt-5 font2 fw-bolder">Nobara Kugisaki</h3>
              <h6 className="font2 bg-profile pt-2 p-4 mt-4 m-2 border border-black rounded rounded-3 infos-profile">
                Amo meus animais 🐶🐈🐾️
                <br />
                Fitness life💪🏃‍♀️🤸‍♀️
              </h6>
              <div className="d-flex ms-3 align-items-center">
                <img className="mr-2" src="./src/assets/icons/company.png" alt="" />
                <p className="m-2 pt-2">Harvard</p>
              </div>
              <div className="d-flex ms-3 align-items-center">
                <img className="mr-2" src="./src/assets/icons/email.png" alt="" />
                <p className="m-2 pt-2">Kugisaki001@gmail.com</p>
              </div>
              <div className="d-flex ms-3 align-items-center">
                <img className="mr-2" src="./src/assets/icons/location.png" alt="" />
                <p className="m-2 pt-2">Aracaju</p>
              </div>
            </div>
          )}
          <div className="col-9 offset-3">
            {!modoEdicao && (
              <>
                <h1 className="mt-5 login-space ms-5 text-left ps-5 font2 fw-bolder">Olá, eu me chamo Nobara </h1>
                <h2 className="mt-5 fw-normal text-left ps-5 ms-3">
                  <ul>
                    <li>Pesquisadora na Instituição de ensino Harvard</li>
                  </ul>
                </h2>
              </>
            )}
            <div className="border border-2 border-black rounded-5 m-5">
              <h3 className="font2 mt-5 ms-1 ps-4 fs-4 fw-bolder">Buscas Salvas 📌</h3>
              {dados.map((x, index) => (
                <SaveSearchs key={index} title={x.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
