import React, { useState } from 'react';
import Button from '../Buttons';
import { useAuthContext } from '../../contexts/authContext';

function SignIn() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, setLoading, errors } = useAuthContext();

  const alternarVisibilidadeSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const handleSubmit = () => {
    setLoading(true);
    login(email, password);
  };

  return (
    <div>
      <img className="logo" src="./src/assets/logo/logo.png" alt="" />
      {errors.length > 0 ? (
        <p className="mt-5 text-danger">
          Erro:&nbsp;
          {errors[0]}
        </p>
      ) : <div className="mt-5 mb-3" />}
      <div className="ms-1">
        <span className="m-2 signUp-font" id="basic-addon1">Login:</span>
        <input type="text" className="selection-bg text-center rounded-4 border border-dark mt-5 py-1 me-4" placeholder="email@example.com" aria-label="Login" aria-describedby="basic-addon1" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mt-5">
        <span className="m-2 signUp-font" id="basic-addon2">Senha:</span>
        <div className="input-with-icon">
          <input type={senhaVisivel ? 'text' : 'password'} className="text-center selection-bg rounded-4 border border-dark py-1 me-4" placeholder="********" aria-label="Recipient's username" aria-describedby="basic-addon2" value={password} onChange={(e) => setPassword(e.target.value)} />
          <img className="eye-icon" role="presentation" src={senhaVisivel ? './src/assets/icons/eye-solid.svg' : './src/assets/icons/eye-slash-solid.svg'} alt="Mostrar senha" onClick={alternarVisibilidadeSenha} />
        </div>
      </div>
      <p className="mt-3 login-hl signUp-font">Esqueceu a senha?</p>
      <label htmlFor="checkboxForm">
        {' '}
        <input type="checkbox" id="checkboxForm" className="mx-2 SignUp-font" />
        Concordo com os
        {' '}
        <span className="login-hl signUp-font">termos do usuário</span>
      </label>
      <Button title="Entrar" color="login-button px-5 border border-dark signUp-font" onClick={handleSubmit} />
    </div>
  );
}

export default SignIn;
