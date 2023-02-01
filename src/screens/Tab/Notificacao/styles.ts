import styled from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styled.View`
    flex: 1;
`;

export const ContentTop = styled.View`
    width: 100%;
    height: 40%;
    align-items: center;
    padding: 20px 10px;
`;

export const ContentTopTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.BLACK})};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ContentBody = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding: 20px 10px;
`;

export const ContentBodyTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ContentFlat = styled.View`
    /* flex: 1; */
    margin-top: 10px;
    border-radius: 17px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const NewNotificationsFlat = styled.View`
    width: 83%;
    padding: 10px;
    height: 88px;
`;

export const DataNotifications = styled.Text`

`;

export const DataNotificationsText = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
`;

export const TitleNotifications = styled.View`
`;

export const TitleNotificationsText = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TYPOSECONDARY};
`;

export const DescriptionNotifications = styled.View`

`;

export const DescriptionNotificationsText = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
`;

export const NewButtonNotifications = styled.TouchableOpacity`
    width: 50px;
    height: 88px;
    align-items: center;
    justify-content: center;
`;
