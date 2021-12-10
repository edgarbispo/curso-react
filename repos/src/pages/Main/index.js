import {FaGithub, FaPlus} from 'react-icons/fa';
import {Container, Form, SubmitButton} from './styles';
import {useCallback, useState} from "react";

import api from '../../services/api';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([])

    function handleinputChange(e) {
        setNewRepo(e.target.value);
    }

    const handleSubmit = useCallback((e) =>{
        e.preventDefault();

        async function submit() {
            const response = await api.get(`repos/${newRepo}`);
            const data = {
                name: response.data.full_name,
            }

            setRepositorios([...repositorios, data]);
            setNewRepo('');
        }

        submit();

    }, [newRepo, repositorios]);

    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositórios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder={"Adicionar Repositórios"}
                       value={newRepo}
                       onChange={handleinputChange}
                />
                <SubmitButton>
                    <FaPlus color={"FFF"} size={14}/>
                </SubmitButton>
            </Form>

        </Container>
    )
}