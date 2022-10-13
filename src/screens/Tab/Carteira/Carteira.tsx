import React from 'react';
import { View, Text } from 'react-native';

import { Header } from '../../../components/Header/Header';
import {
    Container,
    Content,
    ViewContainer,
    ViewBalanceLeft,
    ViewBalanceRight,
    TitleValor,
    TitleValoConta,
    TitleCartao,
    TitleNomeCartao,
} from './styles';

export const Carteira = () => {
    return (
        <Container>
            <Header />

            <ViewContainer>
                <Content>
                    <ViewBalanceLeft>
                        <TitleValor>Valor Total</TitleValor>
                        <TitleValoConta>R$ 1.000,00</TitleValoConta>
                    </ViewBalanceLeft>


                    <ViewBalanceRight>
                        <TitleCartao>Cartão</TitleCartao>
                        <TitleNomeCartao>Wallet</TitleNomeCartao>
                    </ViewBalanceRight>
                </Content>
            </ViewContainer>
        </Container>
    )
}