import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"; 
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Container, Form } from "./styles";

import { FiArrowLeft} from "react-icons/fi"

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";


export function New(){
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [rating , setRating] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag , setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]); //Aqui eu estou atualizando o vetor de links
        setNewTag("");

    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    function handleBack(){
        navigate(-1)
      }

    async function handleNewNote(){
        if(!title){
            return alert("Digite o título do filme.");
        }
        if(!rating){
            return alert("Digite a nota do filme.");
        }
        if(newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
        }

        await api.post("/movies", {title, description, rating , tags});

        alert("Nota criada com sucesso!")
        navigate(-1)
    }

    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <ButtonText onClick={handleBack} title="Voltar"><FiArrowLeft /></ButtonText>
                    </header>
                    
                    <h1>Novo filme</h1>
                    
                    <div className="initial">
                        <Input placeholder="Título" onChange={e => setTitle(e.target.value)}/>
                        <Input placeholder="Sua nota (de 0 a 5)" type="number" onChange={e => setRating(e.target.value)}/>
                    </div>

                    <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)}/>

                    <Section title="Marcadores">
                        <div className="tags">
                            {tags.map((tag, index) => ( <NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)}/>))} 
                                <NoteItem isnew="true" placeholder="Novo marcador" value={newTag} onChange={e => setNewTag(e.target.value)} onClick={handleAddTag}/>
                        </div> 
                    </Section>
                    
                    <div className="userChoice">
                        <Button title="Excluir filme" isDelete onClick={handleBack}/>
                        <Button title="Salvar alterações" onClick={handleNewNote}/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}