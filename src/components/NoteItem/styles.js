import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${ ({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: ${ ({ theme, isnew }) => isnew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
    max-width: ${ ({ isnew }) => isnew ? `180px` : "140px"};
    
    border-radius: 10px;
    padding-right: 16px;
    margin-right:24px;

    > button{
        border: none;
        background: none;


        svg{
            font-size: 24px;
        }
    }

    .button-delete{
        color: ${({theme}) => theme.COLORS.PINK};
    }

    .button-add{
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > input{
        margin-left: 10px;
        height: 56px;
        width: 100%;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;
        
        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }
`;