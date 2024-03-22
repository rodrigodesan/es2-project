import React from 'react';
import Button from '../Buttons';

function SignUp() {
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
        <input type="text" className="text-center  w-100 border border-dark py-2 px-5 me-0  ms-0" placeholder="" aria-label="Login" aria-describedby="basic-addon1" />
        <Button title="Inscrever-se" color="signUp-button w-100 border border-dark fs-3 signUp-font" />
      </div>
    </div>
  );
}

export default SignUp;
