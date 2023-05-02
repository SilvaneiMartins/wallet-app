import styled from 'styled-components/native';

export const ContentFlat = styled.View`
    margin-top: 10px;
    border-radius: 17px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const NewNotificationsFlat = styled.View`
    width: 83%;
    height: 88px;
    padding: 10px;
    padding-left: 20px;
`;

export const DataNotifications = styled.Text``;

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

export const DescriptionNotifications = styled.View``;

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

export const Badge = styled.View`
    top: -3px;
    right: 8px;
    width: 15px;
    height: 15px;
    position: absolute;
    border-radius: 10px;

    background-color: tomato;
`;
