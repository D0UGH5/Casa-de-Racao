import axios from 'axios';
import {useState , useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

export default function RacaoDelete() {
    const {id} = useParams();
    const [racao, setRacao] = useState({});
    const [status, setStatus] = useState("");
    const [botaoStatus, setbotaoStatus] = useState(true);

    useEffect(() => {
        async function Consultar() {
               const response = await axios.delete(`http://localhost:3000/racao/${id}`);
                setRacao(response.data);
                setbotaoStatus(false);
        }
        Consultar();
    }, []);
    async function confirmar(e) {
        try{
            const response = await axios.delete(`http://localhost:3000/racao/${id}`);
            setStatus("Produto excluído com sucesso!");
            setRacao({});
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

    return (
        <div>
            <h3>{Racao.nome}</h3>
            {status !='Produto Excluido' ? <button onClick={confirmar} disabled={botaoStatus}>Confirmar Exclusão</button> : null}
            <h3>{status}</h3>
            <Link to='/Racao'>Voltar</Link>
        </div>
    );
}