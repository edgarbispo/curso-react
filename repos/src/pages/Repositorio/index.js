import {useParams} from "react-router-dom";
import {Container} from "./styles";
import {useEffect, useState} from "react";
import api from '../../services/api';

export default function Repositorio() {

    // Nome do Parametro da Pagina - Router
    const {repositorio} = useParams();
    const [rep, setRep] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {

        async function load() {
            const nomeRepo = decodeURIComponent(repositorio);

            // Executar ao mesmo tempo - Axios
            const [repositorioData, issuesData] = await Promise.all([
                            api.get(`/repos/${nomeRepo}`),
                            api.get(`/repos/${nomeRepo}/issues`, {
                                params: {
                                    state:'open',
                                    per_page: 5
                                }
                            })
                        ]);

            setRep(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);

        }

        load();

    }, [repositorio]);

    return(
        <Container>

        </Container>
    )
}