import React from 'react';
import { View, Text } from 'react-native';

import { Header } from '../../../components/Header';
import { Container } from './styles';

export const Notificacao = () => {
    return (
        <>
            <Header
                iconLeft
                typeNotification
                appName='Notificação'
            />
            <Container>

            </Container>
        </>
    )
}