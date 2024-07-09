import styled from "styled-components";

import backgroundImg from "../../assets/newBackground.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1{
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > h2{
        font-size: 24px;
        margin: 48px 0;
    }

    > p{
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a{
        margin: 42px auto;
        color: ${({ theme }) => theme.COLORS.PINK};

            svg{
            padding-top: 5px;
            width: 16px;
            height: 16px;
        }
    }

    
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`;