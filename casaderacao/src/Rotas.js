import Home from './Paginas/Home';
import Estoque from './Paginas/Estoque';
import Layout from './Paginas/Layout';
import Racao from './Paginas/Racao';
import RacaoCreate from './Paginas/Racao/Create';
import RacaoUpdate from './Paginas/Racao/update';
import RacaoDelete from './Paginas/Racao/delete';

import {BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout/>} >
                    <Route index element={ <Home/>} />
                    <Route path="estoque" element={ <Estoque/>} />
                    <Route path="Racao" element={ <Racao/>} />
                    <Route path="Racao/create" element={ <RacaoCreate/>} />
                    <Route path="Racao/update/:id" element={ <RacaoUpdate/>} />
                    <Route path="Racao/delete/:id" element={ <RacaoDelete/>} />
                    <Route path="*" element={ <h1>Errou algo ai paizao</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}