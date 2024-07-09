import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;

    padding: 32px;
    margin-bottom: 24px;

    display: flex;
    flex-direction: column;


    > h1{
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 8px;
    }

    > .score{
        svg{
            color: ${({theme}) => theme.COLORS.PINK};

        }
    }

    > p{
        margin-top: 15px;
        margin-bottom: 15px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        text-align: start;
        resize: none;
        overflow-y: auto;
        height: 52px;       
        text-align: justify;

    }

    > footer{
        width: 100%;
        display: flex;
        margin-top: 24px;
    }

     /* Estilizando a barra de rolagem */
     ::-webkit-scrollbar {
        width: 10px; /* Largura da barra de rolagem */
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK}; /* Cor do polegar da barra de rolagem */
        border-radius: 5px; /* Borda arredondada do polegar */
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.GRAY_300}; /* Cor da trilha da barra de rolagem */
    }
`;