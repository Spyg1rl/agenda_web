
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AcessarConta from './pages/AcessarConta';
import CrieSuaConta from './pages/CrieSuaConta';


//declarando o componente como função
export default function Main() {
    //função para renderizar o conteudo html do componente
    return (
       <Routes>
        <Route
            path="/acessar-conta"
            element={ <AcessarConta/> }  
        />
        <Route
            path="/crie-sua-conta"
            element={ <CrieSuaConta/> }  
        />
       </Routes> 
    )

}