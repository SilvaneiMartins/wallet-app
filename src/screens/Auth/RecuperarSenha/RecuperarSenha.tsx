import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../../components/Input';
import { ButtonPersonalizado } from '../../../components/ButtonPersonalizado';
import {
    Container,
    ContentHeadedr,
    Title,
    Description,
    ContendBody,
    ContentFooter,
    ButtonGoBack,
    Title1,
    Title2,
} from './styles';

export const RecuperarSenha = () => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    const handleVoltarLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ContentHeadedr>
                    <Title>Seja Bem Vindo {'\n'} a App Wallet</Title>
                    <Description>Recuperar Senha</Description>
                </ContentHeadedr>

                <ContendBody>
                    <Input
                        LeftIcon
                        iconSize={25}
                        iconName='mail-outline'
                        secureTextEntry={false}
                        iconColor={COLORS.GRAY3}
                        placeholder='Digite seu e-mail'
                    />
                </ContendBody>

                <ButtonPersonalizado
                    title='Recuperar'
                    onPress={() => { }}
                    style={{
                        marginTop: 40
                    }}
                />

                <ContentFooter>
                    <ButtonGoBack onPress={handleVoltarLogin}>
                        <Title1>Não quer recuperar senha?</Title1>
                        <Title2>Voltar</Title2>
                    </ButtonGoBack>
                </ContentFooter>
            </ScrollView>
        </Container>
    )
}