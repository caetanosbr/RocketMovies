import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "header" "content";

    

    > main{
        grid-area: content;
        overflow-y: auto;

        h1{
            margin-bottom: 40px;
        }

        .initial{
            display: flex;
            gap: 40px;
            margin-bottom: 40px;
        }
    }

    .tags{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    max-width: 1113px;
    margin: 40px auto;

    > header{
        display: flex;
        flex-direction: row;
        align-items: start;

        margin-bottom: 36px;
        
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.PINK};

            svg{
                margin-top: 3px;
            }
        }
    }

    > .userChoice{
        display: flex;
        gap: 40px;
    }
`;