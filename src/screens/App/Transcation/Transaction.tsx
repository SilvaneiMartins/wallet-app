import React from 'react'
import {  FlatList } from 'react-native';
import { CaretDoubleLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../../components/Header';
import { transaction } from '../../../utils/transaction';
import {
    Container,
    ContentFlat,
    IconTransaction,
    DetailsTransaction,
    NameTransaction,
    SubtTitleTransaction,
    AmountTransaction,
    ButtonGoBack,
} from './styles';

export const Transaction = () => {
    const navigation = useNavigation();

    const handleGoBackHome = () => {
        navigation.goBack()
    }

    return (
        <>
            <Header
                iconLeft
                typeTransaction
                appName="Minhas Transações"
            />
            <Container>
                <FlatList
                    data={transaction}
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
                    showsVerticalScrollIndicator={false}
                />
                <ButtonGoBack onPress={handleGoBackHome}>
                    <CaretDoubleLeft size={32} weight="light" />
                </ButtonGoBack>
            </Container>
        </>
    )
}