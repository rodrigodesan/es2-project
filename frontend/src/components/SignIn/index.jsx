import React from 'react';
import Button from '../Buttons';

function SignIn() {
  return (
    <div>
      <img className="logo" src="./src/assets/logo/logo.png" alt="" />
      <div className=" mt-5 ms-1">
        <span className="m-2 signUp-font" id="basic-addon1">Login:</span>
        <input type="text" className="selection-bg text-center rounded-4 border border-dark mt-5 py-1 me-4" placeholder="email@example.com" aria-label="Login" aria-describedby="basic-addon1" />
      </div>
      <div className="mt-5">
        <span className="m-2 signUp-font" id="basic-addon2">Senha:</span>
        <input type="text" className="text-center selection-bg rounded-4 border border-dark py-1 me-4" placeholder="********" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      </div>
      <p className="mt-3 login-hl signUp-font">Esqueceu a senha?</p>
      <label htmlFor="checkboxForm">
        {' '}
        <input type="checkbox" id="checkboxForm" className="mx-2 SignUp-font" />
        Concordo com os
        {' '}
        <span className="login-hl signUp-font">termos do usuário</span>
      </label>
      <Button title="Entrar" color="login-button px-5 border border-dark signUp-font" />
    </div>
  );
}

export default SignIn;