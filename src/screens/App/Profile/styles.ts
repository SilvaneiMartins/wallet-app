import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    margin-top: 30px;
`;

export const Footer = styled.View`
    margin-top: 10px;
`;

export const Avatar = styled.Image`
    width: 95px;
    height: 95px;
    border-radius: 45px;
`;

export const ViewHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const HeaderName = styled.Text`
    font-size: 22px;
    margin-right: 15px;
    color: ${({ theme }) => theme.COLORS.PURPLE_CARD};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const IconButton = styled.TouchableOpacity`

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