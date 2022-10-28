import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import VisaPng from '../../../assets/visa.png';
import BgPng from '../../../assets/addcard.png';
import ChipPng from '../../../assets/chipcard.png';
import { GoBack } from '../../../components/GoBack'
import {
    Container,
    Title,
    Content,
    SubTitle,
    ContentChip,
    ContetVisa,
} from './styles';

export const AddCartao = () => {
    const navigation = useNavigation();

    const handleAddCartao = () => {
        navigation.navigate('DetailsCard');
    }

    return (
        <>
            <GoBack />
            <Container>
                <Title>Adicionar Cartão</Title>

                <Pressable onPress={handleAddCartao}>
                    <Content
                        source={BgPng}
                    >
                        <ContentChip source={ChipPng} />
                        <ContetVisa source={VisaPng} />
                    </Content>
                </Pressable>

                <SubTitle>
                    Adicionar um novo cartão {'\n'}
                    na sua carteira para uma vida fácil
                </SubTitle>
            </Container>
        </>
    )
}