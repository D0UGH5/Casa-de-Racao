import axios from "axios"; 
import {useeffect, useState } from "react";
import {Link } from "react-router-dom";

export default function Racao(){

    const [racao, setRacao] = useState([])

    useEffect(
        function(){

            async function consultar(){

                const resposta = await axios.get("") // adiciona a rota da API
                console.log(resposta)
                setRacao(resposta.data)
            }
            consultar();
        }
        , []
    )


return(
    <div>
        <link to='/Racao/create'>Novo</link>
        <table>
            <thead><tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Validade</th>
                <th>Marca</th>
                <th>Tipo</th>
                <th>Sabor</th>
                <th>Data de Entrada</th>
                </tr></thead>
                <tbody>
                    {Racao==null ? null :Racao.map(
                        (Racao) =>
                        <tr key={Racao.id}>
                        <td>{Racao.nome}</td>
                        <td>{Racao.preco}</td>
                        <td>{Racao.validade}</td>
                        <td>{Racao.marco}</td>
                        <td>{Racao.tipo}</td>
                        <td>{Racao.sabor}</td>
                        <td>{Racao.dataEntrada}</td>
                        <td><Link to={"/Racao/uptade/" + Racao.id}>Alterar</Link></td>
                        <td><Link to={"/Racao/delete/" + Racao.id}>Excluir</Link></td>
                        </tr>
                    )
                }
                </tbody>
        </table>
        <Link to="/">Voltar</Link>
    </div>
)
}