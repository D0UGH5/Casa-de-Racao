import axios from 'axios';
import {useRef, useState} from 'react';
import {Link} from 'react-router-dom';

export default function RacaoCreate(){
    const [status,setStatus] = useState("");
    const nome = useRef("");
    const preco = useRef("");
    const validade = useRef("");
    const marca = useRef("");
    const tipo = useRef("");
    const sabor = useRef("");
    const dataEntrada = useRef("");

return(
    <div>
        <form onSubmit ={ gravar }>
            Nome: <input ref={nome} type="text" maxlength="50" required />
            Preço: <input ref={preco} type="number" step="0.01" required />
            Validade: <input ref={validade} type="date" required />
            marca: <input ref={marca} type="text" maxlength="50" required />
            Tipo: <input ref={tipo} type="text" maxlength="50" />
            Sabor: <input ref={sabor} type="text" maxlength="50"  />
            Data de Entrada: <input ref={dataEntrada} type="datetime" required />
        </form>
        <h3>{status}</h3>
        <Link to='/Racao'>Voltar</Link>
    </div>
)

async function gravar(e){
e.preventDefault();
try{
    const racao = {nome: nome.current.value, 
        preco: preco.current.value,
        validade: validade.current.value,
        marca: marca.current.value,
        tipo: tipo.current.value,
        sabor: sabor.current.value,
        dataEntrada: dataEntrada.current.value}
                                    
    } catch(erro){
        setStatus("Falha ao cadastrar produto");
    }
}
}