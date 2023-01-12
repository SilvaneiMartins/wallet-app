import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ContentFlat = styled.View`
    padding: 5px;
    margin-right: 10px;
    flex-direction: row;
`;

export const IconTransaction = styled.Image`
    width: 60px;
    height: 60px;
`;

export const DetailsTransaction = styled.View`
    flex: 1;
`;

export const NameTransaction = styled.Text`
    font-weight: 900;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-weight: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const SubtTitleTransaction = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-weight: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const AmountTransaction = styled.Text`
    font-weight: 900;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-weight: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const ButtonGoBack = styled(Pressable)`
    position: absolute;
    bottom: 20px;
    right: 30px;
    padding: 10px;
    border-radius: 30px
    background-color: ${({ theme }) => theme.COLORS.GRAY4};
`;