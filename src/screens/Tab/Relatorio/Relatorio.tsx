import React from 'react';
import { View, Text } from 'react-native';

import { Header } from '../../../components/Header';
import { Container } from './styles';

export const Relatorio = () => {
    return (
        <>
            <Header
                iconLeft
                typeRelatorio
                appName='Relatório'
            />
            <Container>
                <Text>Relatorio</Text>
            </Container>
        </>
    )
}