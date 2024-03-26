import React from 'react';
import { Link } from 'react-router-dom';

function EditProfile({ toggleModoEdicao }) {
  return (
    <div className="container-fluid font1 ps-0">
      <div className="row" />
      <div className="col-3 border border-1 border-black pt-5 text-center position-fixed vh-100">
        <p className="settings me-3">
          <span>
            <Link to="/perfil" onClick={toggleModoEdicao}>
              <img src="./src/assets/icons/save-dark.png" alt="" />
            </Link>
          </span>
        </p>
        <span className="border border-dark rounded-circle edit-photo">

          <img className="p-0settings" src="./src/assets/icons/photo.png" alt="profile_image" />
        </span>
        <p className="just-space" />
        <label type="submit" htmlFor="profile-photo" className="btn bg-dark text-white font2 rounded-5">
          Add Foto
          <input className="d-none" type="file" name="profile-photo" id="profile-photo" />
        </label>

        <h5 className="text-left mt-5 font2 ms-4 fw-bolder infos-profile fs-6">Nome</h5>
        <input className="px-5 mx-auto" type="text" name="profile-name" id="" />
        <h5 className="text-left mt-2 font2 ms-4 fw-bolder infos-profile fs-6">Sobrenome</h5>
        <input className="px-5 mx-auto" type="text" name="profile-sobrenome" id="" />
        <h5 className="text-left mt-2 font2 ms-4 fw-bolder infos-profile fs-6">Bio</h5>
        <input type="text" className="font2 bg-profile py-4   border border-black rounded rounded-3 " />

        <div className="d-flex ms-3 align-items-center">
          <img className="mr-2" src="./src/assets/icons/company.png" alt="" />
          <p className="m-2 pt-2"><input type="text" /></p>
        </div>
        <div className="d-flex ms-3 align-items-center">
          <img className="mr-2" src="./src/assets/icons/email.png" alt="" />
          <p className="m-2 pt-2"><input type="text" /></p>
        </div>
        <div className="d-flex ms-3 align-items-center">
          <img className="mx-1" src="./src/assets/icons/location.png" alt="" />
          <p className="m-2 pt-2"><input type="text" /></p>
        </div>
      </div>
      <div className="col-9 offset-3">
        <h1 className="mt-5 login-space ms-5 text-left ps-5 font2 fw-bolder">
          Editar mensagem Inicial
          <input type="text" />
        </h1>
        <h4 className="mt-5 fw-normal text-left ps-5 ms-3">
          Editar mensagem destaque
          <ul>
            <li><input className="px-5 mx-auto" type="text" /></li>
          </ul>
        </h4>
      </div>
    </div>
  );
}

export default EditProfile;
