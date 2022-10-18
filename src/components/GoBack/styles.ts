import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    padding: 20px;
    width: 50px;
    height: 50px;
    margin-left: 35px;
    align-items: center;
    justify-content: center;
    margin-top: ${Platform.OS === 'ios' ? 0 : 50}px;
`;
