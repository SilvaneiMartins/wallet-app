import React from "react";
import { SafeAreaView, Text } from "react-native";

import Input from ".././../components/Input";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial";
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
                {/* <Input name="email" iconName="mail-outline" placeholder="Seu e-mail" /> */}
            </ContentBody>
            <ContentFooter></ContentFooter>
        </Container>
    );
};

export default Login;
