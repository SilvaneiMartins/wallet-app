import React from 'react';
import { View, Text } from 'react-native';

import { GoBack } from '../../../components/GoBack';
import detailsCardPng from '../../../assets/carddetails.png';
import { ButtonPersonalizado } from '../../../components/ButtonPersonalizado';
import {
    Container,
    Title,
    CardImage,
    Name,
    Banco,
    Conta,
    Status,
    Validade,
    ViewInfo,
    InfoTitle,
    ViewDetails,
} from './styles';

export const DetailsCard = () => {
    return (
        <>
            <GoBack />
            <Container>
                <Title>Detalhes do Cartão</Title>

                <CardImage
                    source={detailsCardPng}
                />

                <ViewDetails>
                    <ViewInfo>
                        <InfoTitle>Nome</InfoTitle>
                        <Name>Silvanei Martins</Name>
                    </ViewInfo>
                    <ViewInfo>
                        <InfoTitle>Banco</InfoTitle>
                        <Banco>Martins</Banco>
                    </ViewInfo>
                    <ViewInfo>
                        <InfoTitle>Conta</InfoTitle>
                    <Conta>000934-2</Conta>
                    </ViewInfo>
                    <ViewInfo>
                        <InfoTitle>Status</InfoTitle>
                    <Status>Ativo</Status>
                    </ViewInfo>
                    <ViewInfo>
                        <InfoTitle>Vencimento</InfoTitle>
                    <Validade>2022-2025</Validade>
                    </ViewInfo>
                </ViewDetails>

                <ButtonPersonalizado
                    variant='transparent'
                    title='Deletar Cartão'
                    onPress={() => { }}

                    style={{
                        marginTop: 30,
                    }}
                />
            </Container>
        </>
    )
}