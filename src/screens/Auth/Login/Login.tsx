import React, { useState } from "react";
import { useTheme } from "styled-components";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../../../components/Input/Input";
import { ButtonSocial } from "../../../components/ButtonSocial/ButtonSocial";
import { ButtonPersonalizado } from "../../../components/ButtonPersonalizado";
import { ButtonSocialGoogle } from "../../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
    ButtonSignUp,
    TitleButtonSignUp1,
    TitleButtonSingUp2,
    ContentForgotPassword,
    ContentButtonForgotPassword,
    ContentTitleForgotPassword,
} from "./styles";

export const Login = () => {
    const { COLORS } = useTheme();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation()

    function onPressButton() {
        setLoading(true);
        console.log("pressionado");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    const handleCadastro = () => {
        navigation.navigate('Cadastro');
    }

    const handleRecuperarSenha = () => {
        navigation.navigate('RecuperarSenha');
    }

    return (
        // <KeyboardAvoidingView
        //     behavior="position"
        //     enabled
        // >
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ContentHeader>
                    <Title> Seja bem vindo(a) {"\n"} a App Carteira</Title>
                    <Description>Entrar com rede sociais</Description>
                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocial iconName="facebook" title="Facebook" />
                    </ViewButton>
                </ContentHeader>
                <ContentBody>
                    <Input
                        LeftIcon
                        iconSize={25}
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={false}
                        iconName="mail-outline"
                        keyboardType="email-address"
                        placeholder="Digite seu e-mail"
                    />
                    <Input
                        LeftIcon
                        RightIcon
                        iconSize={25}
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType="default"
                        iconName="lock-closed-outline"
                        placeholder="Digite sua senha"
                    />
                    <ContentForgotPassword>
                        <ContentButtonForgotPassword onPress={handleRecuperarSenha}>
                            <ContentTitleForgotPassword>Recuperar Senha</ContentTitleForgotPassword>
                        </ContentButtonForgotPassword>
                    </ContentForgotPassword>
                    <ButtonPersonalizado
                        title="Entrar"
                        variant="primary"
                        onPress={() => {}}
                        style={{ marginBottom: 20 }}
                    />


                    <ContentFooter>
                        <ButtonSignUp onPress={handleCadastro}>
                            <TitleButtonSignUp1>Não tem cadastro ainda?</TitleButtonSignUp1>
                            <TitleButtonSingUp2>Cadastre-se</TitleButtonSingUp2>
                        </ButtonSignUp>
                    </ContentFooter>
                </ContentBody>
            </ScrollView>
        </Container>
        // </KeyboardAvoidingView>
    );
};
