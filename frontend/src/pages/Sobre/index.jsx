import React from 'react';
import Navbar from '../../components/Navbar';

function Sobre() {
  return (
    <div>
      <Navbar page="true" activePage="sobre" />
      <h1 className="mt-5 dashboard-space text-center font1">Projeto de Engenharia de Software II</h1>
      <p className="mt-4 text-center fs-4 font1">Termos de compromisso do Programa Caminhos da Escola</p>
      <p className="mt-4 text-center fs-4 font1">
        DataSet base disponível em:
        <a className="ms-2" href="https://www.fnde.gov.br/olinda-ide/servico/DADOS_ABERTOS_CDE_SIMEC_TERMO_COMPROMISSO_PAR3_PAR4/versao/v1/aplicacao#!/recursos/PAR4_Itens#eyJmb3JtdWxhcmlvIjp7IiRmb3JtYXQiOiJqc29uIiwiJHRvcCI6MTAwfSwicHJvcHJpZWRhZGVzIjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNF19" target="_blank" rel="noreferrer">Dados abertos</a>
      </p>
      <p className="mt-4 text-center fs-4 font1">
        Link para o repositório deste projeto:
        <a className="ms-2" href="https://github.com/rodrigodesan/es2-project" target="_blank" rel="noreferrer">es2-project</a>
      </p>
      <div className="dashboard-space"><p className="dashboard-space  text-center fs-4 font1">Professor: Glauco Carneiro</p></div>
    </div>
  );
}

export default Sobre;
