import React, { useState } from 'react';
import Button from '../Buttons';
import { useAuthContext } from '../../contexts/authContext';

function SignUp() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    registerUser, errors, success, setLoading,
  } = useAuthContext();

  const alternarVisibilidadeSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const handleSubmit = () => {
    setLoading(true);
    registerUser(name, lastName, email, password);
  };

  return (
    <div className="">
      <h1 className="text-decoration-underline signUp-font mb-5">Criar uma Conta</h1>
      {errors.length > 0 && (
        errors.map((e) => (
          <p className="text-danger text-center">
            Erro:&nbsp;
            {e}
          </p>
        ))
      )}
      {success && errors.length === 0 ? (
        <h2 className="mt-5 mb-5 text-success text-center">
          {success}
        </h2>
      ) : (
        <div className=" mt-5 ms-1">
          <p className="text-left m-2 signUp-font">Nome:</p>
          <input type="text" className="text-center  w-100 border border-dark py-2 px-5 me-0  ms-0" placeholder="" aria-label="Login" aria-describedby="basic-addon1" value={name} onChange={(e) => setName(e.target.value)} />
          <p className="text-left m-2 signUp-font">Sobrenome:</p>
          <input type="text" className="text-center  w-100 border border-dark py-2 px-5 me-0  ms-0" placeholder="" aria-label="Login" aria-describedby="basic-addon1" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <p className="text-left m-2 signUp-font">Email:</p>
          <input type="text" className="text-center  w-100 border border-dark py-2 px-5 me-0  ms-0" placeholder="" aria-label="Login" aria-describedby="basic-addon1" value={email} onChange={(e) => setEmail(e.target.value)} />
          <p className="text-left m-2 signUp-font">Senha:</p>
          <div className="input-with-icon w-100">
            <input type={senhaVisivel ? 'text' : 'password'} className="text-center  w-100 border border-dark py-2 px-5 me-0  ms-0" placeholder="" aria-label="Login" aria-describedby="basic-addon1" value={password} onChange={(e) => setPassword(e.target.value)} />
            <img className="eye-icon2" role="presentation" src={senhaVisivel ? './src/assets/icons/eye-solid.svg' : './src/assets/icons/eye-slash-solid.svg'} alt="Mostrar senha" onClick={alternarVisibilidadeSenha} />
          </div>
          <Button title="Inscrever-se" color="signUp-button w-100 border border-dark fs-3 signUp-font" onClick={handleSubmit} />
        </div>
      )}
    </div>
  );
}

export default SignUp;
