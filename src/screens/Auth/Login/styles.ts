import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    padding: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    margin-left: -10px;
    align-items: center;
    justify-content: space-between;
`;

export const ContentBody = styled.View``;

export const ViewButton = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(25)}px;
    margin-top: ${RFValue(40)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(15)}px;
    margin-bottom: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ContentFooter = styled.View`
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const ButtonSignUp = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const TitleButtonSignUp1 = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const TitleButtonSingUp2 = styled.Text`
    font-size: 17px;
    margin-left: 10px;
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const ContentForgotPassword = styled.View`
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    align-items: flex-end;
    justify-content: flex-end;
`;


export const ContentButtonForgotPassword = styled.TouchableOpacity`
    align-items: center;
    justify-content: flex-end;
`;

export const ContentTitleForgotPassword = styled.Text`
    align-items: flex-end;
    font-size: 17px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;