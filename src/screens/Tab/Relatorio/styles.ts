import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 15px;
`;

export const BalanceImage = styled.ImageBackground`
    width: 100%;
    height: 215px;
`;

export const AmountValue = styled.Text`
    font-size: 11px;
    top: 60px;
    left: 150px;
    position: absolute;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;