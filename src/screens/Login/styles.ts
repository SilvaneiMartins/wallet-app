import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    padding: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    margin-left: -10px;
    align-items: center;
    justify-content: space-between;
`;

export const ContentBody = styled.View`
`;

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
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
`;

export const ButtonSignUp = styled(Pressable)`
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const TitleButtonSignUp1 = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const TitleButtonSingUp2 = styled.Text`
    font-size: 17px;
    margin-left: 10px;
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;
