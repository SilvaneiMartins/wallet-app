import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    /* padding: 15px; */
`;

export const BalanceImage = styled.ImageBackground`
    width: 100%;
    height: 215px;
`;

export const AmountValue = styled.Text`
    font-size: 11px;
    top: 60px;
    left: 160px;
    position: absolute;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
`;

export const ViewContent = styled.View`
    padding: 30px;
    align-items: center;
    justify-content: center;
`;

export const TitleAmount = styled.Text`
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const ValorTatal = styled.Text`
    font-size: 30px;
    line-height: 42px;
    color: ${({ theme }) => theme.COLORS.PURPLE_CARD};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;


export const Footer = styled.View`
    flex: 1;
`;

export const ContentFlat = styled.View`
    padding: 5px;
    margin-right: 10px;
    flex-direction: row;
`;

export const ContentFlatHeader = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: 20px;
    margin-left: 13px;
    color: ${({ theme }) => theme.COLORS.GRAY1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const ButtonVerTotos = styled.TouchableOpacity`
    padding: 3px;
    border-width: 1px;
    border-radius: 30px;
    border-color: ${({ theme }) => theme.COLORS.PURPLE_CARD};
`;

export const ButtonTitleVertotos = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.PURPLEDARK1};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
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