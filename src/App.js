import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import LoginForm from './components/forms/LoginForm';


//declarando o componente como função
export default function App () {
  //função para renderizar o conteudo html do componente
  return(
    <div>    
    <Header />
    <Main />
    <LoginForm />
  </div>

  )
  


}
