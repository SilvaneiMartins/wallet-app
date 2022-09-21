import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { useTheme } from "styled-components";

import Input from "../../components/Input/Input";
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial";
import { ButtonPersonalizado } from "../../components/ButtonPersonalizado";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
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
} from "./styles";

export const Login = () => {
    const { COLORS } = useTheme();
    const [loading, setLoading] = useState(false);

    function onPressButton() {
        setLoading(true);
        console.log("pressionado");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    return (
        <Container>
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

                <ButtonPersonalizado
                    title="Entrar"
                    variant="primary"
                    onPress={onPressButton}
                    style={{ marginBottom: 20 }}
                />
            </ContentBody>
            <ContentFooter>
                <ButtonSignUp>
                    <TitleButtonSignUp1>Não tem cadastro ainda?</TitleButtonSignUp1>
                    <TitleButtonSingUp2>Cadastre-se</TitleButtonSingUp2>
                </ButtonSignUp>
            </ContentFooter>
        </Container>
    );
};
