import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const ViewContainer = styled.View`
    padding: 0 30px;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    width: 100%;
    height: 160px;
    flex-direction: row;
    border-radius: 50px;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_CARD};
`;

export const ViewBalanceLeft = styled.View`

`;

export const ViewBalanceRight = styled.View`

`;

export const TitleValor = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const TitleValoConta = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSEXTRABOLD};
`;

export const TitleCartao = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const TitleNomeCartao = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSEXTRABOLD};
`;
