import {useParams} from "react-router-dom";
import {Container, Owner, Loading, BackButton} from "./styles";
import {useEffect, useState} from "react";
import api from '../../services/api';
import {FaArrowLeft} from 'react-icons/fa'

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

    if(loading) {
        return(
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )
    }
    return(
        <Container>
            <BackButton to={"/"}>
                <FaArrowLeft color={"#000"} size={35}/>
            </BackButton>
            <Owner>
                <img src={rep.owner.avatar_url}
                     alt={rep.owner.login}/>
                <h1>{rep.name}</h1>
                <p>{rep.description}</p>
            </Owner>
        </Container>
    )
}