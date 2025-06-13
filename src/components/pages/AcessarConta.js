import React from 'react';
import LoginForm from '../forms/RegisterForm';


//declarando o componente como função
export default function AcessarConta() {
    //função para renderizar o conteudo html do componente
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='text-center'>
                                <img src='https://spyg1rl.github.io/jogo-do-mario/sources/img/logo-mario.png' className='img-fluid' />
                                <h5 className='card-title'>Acessar Conta</h5>
                                <p className='card-text'> Informe suas credenciais de acesso para entrar na agenda. </p>

                            </div>
                            <LoginForm />

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )

}