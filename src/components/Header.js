import React from 'react';
import { NavLink } from 'react-router-dom';


//declarando o componente como função
export default function Header() {
    //função para renderizar o conteudo html do componente
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a className="navbar-brand" href="#">Agenda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/acessar-conta">Acessar Conta</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" href="#">Crie sua conta</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" to="/crie-sua-conta" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )

}