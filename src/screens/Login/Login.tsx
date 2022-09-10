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
} from "./styles";

const Login = () => {
    const { COLORS } = useTheme();

    const [loading, setLoading] = useState(false);

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
                    iconName="mail-outline"
                    placeholder="Digite seu e-mail"
                />
                <Input
                    LeftIcon
                    iconSize={25}
                    iconName="lock-closed-outline"
                    placeholder="Digite sua senha"
                />

                <ButtonPersonalizado
                    title="Entrar"
                    onPress={() => { }}
                    isLoading={loading}
                />
            </ContentBody>
            <ContentFooter></ContentFooter>
        </Container>
    );
};

export default Login;
