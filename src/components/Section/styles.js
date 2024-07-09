import styled from "styled-components";

export const Container = styled.section`
    margin: 40px 0;

    > h2{
        margin-bottom: 24px;
  
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-size: 20px;
        font-weight: 400;
    }

    .space{
        border-radius: 8px;
        height: 88px;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 24px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

        padding: 16px;
    }
`;