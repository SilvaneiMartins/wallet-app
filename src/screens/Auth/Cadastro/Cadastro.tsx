import React from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

import Input from '../../../components/Input';
import { ButtonPersonalizado } from "../../../components/ButtonPersonalizado";
import {
    Container,
    ContentHeader,
    Title,
    Description,
    ContentBody,
    ContentFoooter,
    ButtonFooter,
    Title1,
    Title2,
} from "./styles";

export const Cadastro = () => {
    const { COLORS } = useTheme();
    const navigation  = useNavigation();

    const handleVoltarLogin = () => {
        navigation.navigate('Login');
    }

    return (
        // <KeyboardAvoidingView
        //     behavior="position"
        //     enabled
        // >
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ContentHeader>
                    <Title>Seja bem vindo {'\n'} a App Wallet</Title>
                    <Description>CADASTRO</Description>
                </ContentHeader>

                <ContentBody>
                    <Input
                        LeftIcon
                        iconSize={23}
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='default'
                        secureTextEntry={false}
                        iconColor={COLORS.GRAY2}
                        iconName="person-outline"
                        placeholder="Digite seu nome"
                    />

                    <Input
                        LeftIcon
                        iconSize={23}
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry={false}
                        iconColor={COLORS.GRAY2}
                        iconName="mail-outline"
                        keyboardType='email-address'
                        placeholder="Digite seu e-mail"
                    />

                    <Input
                        LeftIcon
                        RightIcon
                        iconSize={23}
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='default'
                        iconColor={COLORS.GRAY2}
                        iconName="lock-closed-outline"
                        placeholder="Digite sua senha"
                    />

                    <ButtonPersonalizado
                        title="Cadastrar"
                        onPress={() => { }}
                        style={{
                            marginTop: 50,
                        }}
                    />
                </ContentBody>

                <ContentFoooter>
                    <ButtonFooter onPress={handleVoltarLogin}>
                        <Title1>Já tem conta?</Title1>
                        <Title2>Logar-se</Title2>
                    </ButtonFooter>
                </ContentFoooter>
            </ScrollView>
        </Container>
        // </KeyboardAvoidingView>
    );
};
