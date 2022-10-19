import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const Title = styled.Text`
    width: 100%;
    font-size: 30px;
    margin-top: 50px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PURPLE_TEXT};
`;

export const Content = styled.ImageBackground`
    width: 240px;
    height: 340px;
    margin-top: 60px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_CARD};
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin-top: 60px;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const ContentChip = styled.Image`
    width: 35px;
    height: 40px;
    position: absolute;
    top: 75px;
    left: 50px;
`;

export const ContetVisa = styled.Image`
    width: 66px;
    height: 20px;
    position: absolute;
    bottom: 40px;
    right: 27px;
`;