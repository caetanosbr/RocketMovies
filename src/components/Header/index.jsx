import { Container, Profile, Logout } from "./styles";

import { Input } from "../Input"
import { ButtonText } from "../ButtonText";

import { useAuth } from "../../hooks/auth"

import {api} from "../../services/api";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom";


export function Header(){
    const {signOut , user, setSearch} = useAuth();

    const navigation = useNavigate();

    function handleSignOut(){
        navigation("/");
        signOut();
    }


    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    return(
        <Container>
            
            <h1>RocketMovies</h1>

            <div className="UserInput">
                <Input placeholder="Pesquisar pelo título" onChange={(e) => setSearch(e.target.value)}/>
            </div>

            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
                    <ButtonText title="Sair" onClick={handleSignOut}/>
                </div>

                <img src={avatarUrl} alt="Foto do usuário" />
                
            </Profile>
        </Container>
    );
}