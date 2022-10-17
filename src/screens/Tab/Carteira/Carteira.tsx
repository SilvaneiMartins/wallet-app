import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { transaction } from "../../../utils/transaction";
import Payments from '../../../assets/export.png';
import Transfer from '../../../assets/convert.png';
import TopUp from '../../../assets/add-circle.png';
import PayOut from '../../../assets/money-send.png';
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
    Body,
    IconPayment,
    IconTransfer,
    IconPayOut,
    IconTopUp,
    TitleTransfer,
    TitlePayments,
    TitlePayOut,
    TitleTopUp,
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

                <Body>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <IconTransfer source={Transfer} />
                        <TitleTransfer>Transf.</TitleTransfer>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <IconPayment source={Payments} />
                        <TitlePayments>Pagtos</TitlePayments>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <IconPayOut source={PayOut} />
                        <TitlePayOut>Pagto</TitlePayOut>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <IconTopUp source={TopUp} />
                        <TitleTopUp>Mais Opção</TitleTopUp>
                    </TouchableOpacity>
                </Body>
            </ViewContainer>

            <Footer>
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
                    ListHeaderComponent={
                        <ContentFlatHeader>
                            <Title>Minhas Transações</Title>
                            <ButtonVerTotos>
                                <ButtonTitleVertotos>Ver Todos</ButtonTitleVertotos>
                            </ButtonVerTotos>
                        </ContentFlatHeader>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </Footer>
        </Container>
    )
}