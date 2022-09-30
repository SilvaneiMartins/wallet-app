import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;;
`;

export const ContentHeadedr = styled.View`
    width: 100%;
    margin-left: -10px;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 25px;
    margin-top: 40px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: 60px;
    font-size: 30px;
    margin-bottom: 10px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const ContendBody = styled.View`
    margin-top: 80px;
`;

export const ContentFooter = styled.View`
    margin-top: 80px;
    align-items: center;
    justify-content: center;
`;

export const ButtonGoBack = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title1 = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Title2 = styled.Text`
    margin-left: 10px;
    font-size: 17px;
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;
