import React from 'react';
import { View, Text } from 'react-native';

import BalancePng from '../../../assets/estatistica.png'
import { Header } from '../../../components/Header';
import {
    Container,
    AmountValue,
    BalanceImage,
} from './styles';

export const Relatorio = () => {
    return (
        <>
            <Header
                iconLeft
                typeRelatorio
                appName='Relatório'
            />
            <Container>
                <BalanceImage
                    source={BalancePng}
                    resizeMode="contain"
                >
                    <AmountValue>R$ 500,00</AmountValue>
                </BalanceImage>
            </Container>
        </>
    )
}