import styled from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
    justify-content: center;
    width: ${RFValue(145)}px;
    height: ${RFValue(50)}px;
    margin-left: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    box-shadow: 1px 1px 1px rgba(0,0,0, 0.1);
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const IconFacebook = styled(Fontisto)`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    margin-left: ${RFValue(10)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
