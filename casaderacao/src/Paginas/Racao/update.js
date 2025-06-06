import axios from 'axios';
import {useRef, useState , useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

export default function RacaoUpdate() {
    const {id} = useParams();
    const [status, setStatus] = useState("");
    const nome = useRef("");
    const preco = useRef("");
    const validade = useRef("");
    const marca = useRef("");
    const tipo = useRef("");
    const sabor = useRef("");
    const dataEntrada = useRef("");

    useEffect(() => {
        async function Consultar() {
            try {
                const response = await axios.get(`http://localhost:3000/racao/${id}`);
                const racao = response.data;
                nome.current.value = racao.nome;
                preco.current.value = racao.preco;
                validade.current.value = racao.validade;
                marca.current.value = racao.marca;
                tipo.current.value = racao.tipo;
                sabor.current.value = racao.sabor;
                dataEntrada.current.value = racao.dataEntrada;
            } catch (error) {
                setStatus("Erro ao carregar dados do produto");
            }
        }
        Consultar();
    }, [id]);

    return (
        <div>
            <form onSubmit={gravar}>
                Nome: <input ref={nome} type="text" maxLength="50" required />
                Preço: <input ref={preco} type="number" step="0.01" required />
                Validade: <input ref={validade} type="date" required />
                Marca: <input ref={marca} type="text" maxLength="50" required />
                Tipo: <input ref={tipo} type="text" maxLength="50" />
                Sabor: <input ref={sabor} type="text" maxLength="50" />
                Data de Entrada: <input ref={dataEntrada} type="datetime-local" required />
                <button type="submit">Atualizar</button>
            </form>
            <h3>{status}</h3>
            <Link to='/Racao'>Voltar</Link>
        </div>
    );

    async function gravar(e) {
        e.preventDefault();
        const json = {
                nome: nome.current.value,
                preco: preco.current.value,
                validade: validade.current.value,
                marca: marca.current.value,
                tipo: tipo.current.value,
                sabor: sabor.current.value,
                dataEntrada: dataEntrada.current.value}
        try {
            const response = 
                await axios.put(`http://localhost:8000/api/produtos/${id}`, json);
            setStatus("Ração atualizada com sucesso");
            } catch (erro) {
            setStatus(`Falha: ${erro}`);
             }
        }
    }  