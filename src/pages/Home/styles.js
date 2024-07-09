import styled from "styled-components";

import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > .initial{
        margin: 50px auto;
        width: 1121px;
        display: flex;
        justify-content: space-between;
        
        > h1{
            line-height: 42px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

    }
`;

export const NewMovie = styled.div`
    width: 207px;
`;

export const Content = styled.div`
    width: 1121px;
    margin: 0 auto;

`;