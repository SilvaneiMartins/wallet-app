import { Platform } from "react-native";
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    padding: 10px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${Platform.OS === "ios" ? 0 : 25}px;
`;

export const ContentHeader = styled.View`
    padding: 10px;
    margin-left: 20px;
    justify-content: center;
`;

export const Avatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 30px;
    margin-right: 20px;
`;

export const AppName = styled.Text`
    font-size: 20px;
    line-height: 29.8px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const Status = styled.Text`
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;
