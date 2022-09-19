import styled from 'styled-components/native';
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
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
    background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const IconeGogle = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    margin-left: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
