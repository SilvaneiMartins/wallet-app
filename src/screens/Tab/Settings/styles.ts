import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 10px 15px;
`;

export const ViewFooter = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const TitleFooter = styled.Text`
    font-size: 17px;
    margin-top: 10px;
    color: ${({ theme }) => theme.COLORS.PURPLE_CARD};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const ViewIconButton = styled.View`
    padding: 10px;
    border-radius: 30px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY5};
`;