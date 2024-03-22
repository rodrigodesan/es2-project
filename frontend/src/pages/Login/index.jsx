import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

function Login() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [textPosition, setTextPosition] = useState(true);

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
    setTextPosition(!textPosition);
  };

  return (
    <div>
      <Navbar page="true" />
      <section className="container-fluid login-space">
        <div className="row text-dark">
          <div className="col-lg-8 p-0">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./src/assets/images/onibus.png" className="d-block w-100" alt="onibus caminho da escola" />
                </div>
                <div className="carousel-item">
                  <img src="./src/assets/images/bicicleta.jpg" className="d-block w-100" alt="bicicleta caminho da escola" />
                </div>
                <div className="carousel-item">
                  <img src="./src/assets/images/barco.jpg" className="d-block w-100 " alt="barco caminho da escola" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className={`col-lg-4 mt-5 text-${textPosition ? 'center' : 'left'}`}>
            {showSignIn ? <SignIn /> : <SignUp />}
            <p className="text-center mt-4 signUp-font">
              {showSignIn ? 'Não possui uma conta?' : 'Já possui uma conta?'}
              <span className="login-hl" onClick={toggleForm}>
                {showSignIn ? 'Inscreva-se' : 'Login'}
              </span>
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Login;
