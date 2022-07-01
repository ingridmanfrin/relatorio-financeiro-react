import React from 'react';
import logo from '../../assets/imagens/porco.png';
import './header.module.css';

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
            <a className="navbar-brand" href="../html/index.html">
            <div className="navbar-logo mb-lg-0">
                <img id="imgLogo" src={logo}/>
                <span id="oink">Oink</span>
            </div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >Relatórios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../html/login.html">Entrar</a>
                </li>
                <li className="nav-item">
                    <a type="button" className="btn btn-success" href="../html/cadastro.html">Cadastre-se</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </header>

  );
}

export default Header;
