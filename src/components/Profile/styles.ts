import styled from 'styled-components/native';

export const Container = styled.View``;

export const ViewProfile = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 5px 15px;
    margin-top: 15px;
`;

export const ViewIcon = styled.View.attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1.00,

    elevation: 3,
})`
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ViewRight = styled.View`
    flex: 1;
    margin-left: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ProfileName = styled.Text`
    font-size: 18px;
    justify-content: space-between;
    color: ${({ theme }) => theme.COLORS.PURPLE_CARD};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;