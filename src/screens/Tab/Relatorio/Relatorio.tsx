
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../../components/Header';
import BalancePng from '../../../assets/estatistica.png'
import { limited_transaction } from '../../../utils/limited_transaction';
import {
    Container,
    AmountValue,
    BalanceImage,
    ViewContent,
    TitleAmount,
    ValorTatal,
    Footer,
    ContentFlat,
    ContentFlatHeader,
    Title,
    ButtonVerTotos,
    ButtonTitleVertotos,
    IconTransaction,
    DetailsTransaction,
    NameTransaction,
    SubtTitleTransaction,
    AmountTransaction,
} from './styles';

export const Relatorio = () => {
    const navigation = useNavigation();

    const handleGoTransaction = () => {
        navigation.navigate('Transaction')
    }

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

                <ViewContent>
                    <TitleAmount>Valor Taltal</TitleAmount>
                    <ValorTatal>R$ 10.000,00</ValorTatal>
                </ViewContent>

                <Footer>
                    <FlatList
                        data={limited_transaction}
                        renderItem={({ item }) => (
                            <ContentFlat>
                                <IconTransaction
                                    source={item.icon}
                                />

                                <DetailsTransaction>
                                    <NameTransaction>{item.title}</NameTransaction>
                                    <SubtTitleTransaction>{item.subtitle}</SubtTitleTransaction>
                                </DetailsTransaction>

                                <AmountTransaction>R$ {item.amount}</AmountTransaction>
                            </ContentFlat>
                        )}
                        ListHeaderComponent={
                            <ContentFlatHeader>
                                <Title>Minhas Transações</Title>
                                <ButtonVerTotos onPress={handleGoTransaction}>
                                    <ButtonTitleVertotos>Mais Recentes</ButtonTitleVertotos>
                                </ButtonVerTotos>
                            </ContentFlatHeader>
                        }
                        showsVerticalScrollIndicator={false}
                    />
                </Footer>
            </Container>
        </>
    )
}