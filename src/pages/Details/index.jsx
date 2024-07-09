import {Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiStar,  } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai";
import { PiClock } from "react-icons/pi"

import { useAuth } from "../../hooks/auth"

import { useParams , useNavigate} from "react-router-dom" //O useParams serve para buscarmos pelos parametros que existem nas rotas

import { useState, useEffect } from "react";

import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState(null);
  const {user} = useAuth();


  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`movies/${params.id}`);
      navigate(-1);
    }
  }

    // Helper function to render stars based on the rating
  const handleRenderStars = () => {
    const filledStars = Math.min(data?.rating || 0, 5);
    const emptyStars = 5 - filledStars;

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<AiFillStar key={`filled-${i}`} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FiStar key={`empty-${i}`} />);
    }

    return stars;
  };


  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, [])
  
  return (
    <Container>
      <Header />
      <main>
          <ButtonText onClick={handleBack} title="Voltar">
              <FiArrowLeft />
          </ButtonText>
        
        <div className="initial">
          <h1>{data && data.title}</h1>
          <div className="score">
            {handleRenderStars()}
          </div>
        </div>
        <div className="mid">
          <img src="https://github.com/caetanosbr.png" alt="Foto do usuário" />
          <p>Por {user.name}</p>
          < PiClock />
          <p>{data && data.updated_at}</p>
        </div>
      </main>

      <Content>
        {
          data?.movieTags &&
        <div className="tagCollection">
          {
                data.movieTags.map(tag => (<Tag key={String(tag.id)} title={tag.name}/>))
          } 
        </div>
        }

        <p>{data && data.description}</p>

        <Button title="Excluir filme" onClick={handleRemove}/>

      </Content>

    </Container>   

  )
};