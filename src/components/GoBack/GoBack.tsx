import React from 'react';
import { useTheme } from 'styled-components/native';
import { CaretCircleLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

export const GoBack = () => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    return (
        <Container onPress={() => navigation.goBack()}>
            <CaretCircleLeft
                size={40}
                weight='light'
                color={COLORS.GRAY2}
            />
        </Container>
    )
}