import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "header" "content";

    > main{
        width: 1137px;
        margin: 0 auto;
        grid-area: content;
        padding-top: 64px;
        
        button{
            display: flex;
            gap: 8px;
            color: ${({theme }) =>  theme.COLORS.PINK};
            font-size: 16px;
        }

        svg{
            color: ${({theme }) =>  theme.COLORS.PINK};

            font-size: 20px;
        }

        img{
            width: 16px;
            height: 16px;
            border-radius: 35px;
            border: 1px;

        }

        .initial{
            margin: 24px 0;
            display: flex;
            align-items: center;
            gap: 19px;

            svg{
                margin-top: 8px;
            }
        }

        .mid{
            display: flex;
            gap: 8px;
            align-items: center;
            margin-bottom: 40px;
        }
        
        
    };
      
`;

export const Content = styled.div`
     width: 1137px;
     margin: 0 auto;

     > p{
        margin-top: 40px;
        height: 250px;
        text-align: justify;

     }

     
`;



