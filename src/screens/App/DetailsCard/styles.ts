import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Title = styled.Text`
    font-size: 30px;
    margin-top: 30px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PURPLE_TEXT};
`;

export const CardImage = styled.Image`
    width: 100%;
    height: 220px;
    margin-top: 30px;
    border-radius: 50px;
`;

export const ViewDetails = styled.View`
    width: 100%;
    margin-top: 30px;
    align-items: center;
`;

export const ViewInfo = styled.View`
    width: 80%;
    padding: 5px 0;
    flex-direction: row;
`;

export const InfoTitle = styled.Text`
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme}) => theme.COLORS.GRAY4};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Name = styled.Text`
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: ${({ theme}) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Banco = styled.Text`
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: ${({ theme}) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Conta = styled.Text`
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: ${({ theme}) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Status = styled.Text`
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: ${({ theme}) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Validade = styled.Text`
    flex: 1;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: ${({ theme}) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

