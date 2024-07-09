import { Container, NewMovie, Content} from "./styles";

import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import {Section} from "../../components/Section"
import {Note} from "../../components/Note"
import {Tag} from "../../components/Tag"
import { Button } from "../../components/Button"

import { Link , useNavigate } from "react-router-dom";

import { useState , useEffect} from "react";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth"


export function Home(){
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);
    const {user} = useAuth();

    
    const { search } = useAuth();

    const navigate = useNavigate();

    function handleDetails(id){
        navigate(`/details/${id}`)
    }


    useEffect(() =>{
        async function fetchNotes(){
            const response = await api.get(`/movies?title=${search}&user_id=${user.id}&tags=${tagsSelected}`);
            setNotes(response.data);
            
        }

        fetchNotes()
    }, [search]); //Quando mudar o conteúdo do tagsSelected ou do search, automaticamente ele vai executar o useEffect

    return(
        <Container>
            <Header />
            <div className="initial">
                <h1>Meus filmes</h1>
                <NewMovie>
                    <Link to="/new">
                        <Button icon={<FiPlus/>} title="Adicionar filme"></Button>
                    </Link>
                </NewMovie>
            </div>

            <Content>
                {   
                    notes &&
                    notes.map(note => (<Note key={String(note.id)} data={note} onClick={() => handleDetails(note.id)}/>))
                    
                } 
            </Content>

        </Container>
    );
}