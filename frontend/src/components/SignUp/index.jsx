import React, { useState } from 'react';
import Button from '../Buttons';

function SignUp() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const alternarVisibilidadeSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };
  return (
    <div className="">
      <h1 className="text-decoration-underline signUp-font">Criar uma Conta</h1>
      <div className=" mt-5 ms-1">
        <p className="text-left m-2 signUp-font">Nome:</p>
        <input type="text" className="text-center  w-100 border border-dark py-2 px-5 me-0  ms-0" placeholder="" aria-label="Login" aria-describedby="basic-addon1" />
        <p className="text-left m-2 signUp-font">Sobrenome:</p>
        <input type="text" className="text-center  w-100 border border-dark py-2 px-5 me-0  ms-0" placeholder="" aria-label="Login" aria-describedby="basic-addon1" />
        <p className="text-left m-2 signUp-font">Email:</p>
        <input type="text" className="text-center  w-100 border border-dark py-2 px-5 me-0  ms-0" placeholder="" aria-label="Login" aria-describedby="basic-addon1" />
        <p className="text-left m-2 signUp-font">Senha:</p>
        <div className="input-with-icon w-100">
          <input type={senhaVisivel ? 'text' : 'password'} className="text-center  w-100 border border-dark py-2 px-5 me-0  ms-0" placeholder="" aria-label="Login" aria-describedby="basic-addon1" />
          <img className="eye-icon" role="presentation" src={senhaVisivel ? './src/assets/icons/eye-solid.svg' : './src/assets/icons/eye-slash-solid.svg'} alt="Mostrar senha" onClick={alternarVisibilidadeSenha} />
        </div>
        <Button title="Inscrever-se" color="signUp-button w-100 border border-dark fs-3 signUp-font" />
      </div>
    </div>
  );
}

export default SignUp;
