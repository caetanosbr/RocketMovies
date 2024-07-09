import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme, isDelete }) => isDelete ? theme.COLORS.BACKGROUND_1000 : theme.COLORS.PINK};

    color: ${({ theme, isDelete }) => isDelete ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900};

    height: 56px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;

    > .content{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        
        svg{
            margin-top: 5px;
        }
    }

    &:disabled{
        opacity: 0.5;
    }
`;