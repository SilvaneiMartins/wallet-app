import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Pen, Trash } from 'phosphor-react-native';

import { Profile as ComponentProfile } from '../../../components/Profile';
import { GoBack } from '../../../components/GoBack';
import {
    Container,
    Header,
    Content,
    Footer,
    Avatar,
    ViewHeader,
    HeaderName,
    IconButton,
    ViewFooter,
    TitleFooter,
    ViewIconButton,
} from './styles';

export const Profile = () => {
    const { COLORS } = useTheme();

    return (
        <>
            <GoBack />
            <Container>
                <Header>
                    <Avatar
                        source={{
                            uri: 'http://github.com/silvaneimartins.png'
                        }}
                    />
                    <ViewHeader>
                        <HeaderName>Silvanei</HeaderName>
                        <IconButton>
                            <Pen
                                size={25}
                                weight="light"
                                color={COLORS.PURPLE_CARD}
                            />
                        </IconButton>
                    </ViewHeader>
                </Header>
                <Content>
                    <ComponentProfile
                        name='Conta Conectada'
                        onPress={() => { }}
                    />
                    <ComponentProfile
                        name='Privacidade e Segurança'
                        onPress={() => { }}
                    />
                    <ComponentProfile
                        name='Configuração de Login'
                        onPress={() => { }}
                    />
                    <ComponentProfile
                        name='Centro de Serviço'
                        onPress={() => { }}
                    />
                </Content>
                <Footer>
                    <ViewFooter>
                        <TouchableOpacity>
                            <ViewIconButton>
                                <Trash
                                    size={36}
                                    weight="light"
                                    color={COLORS.PURPLE_CARD}
                                />
                            </ViewIconButton>
                        </TouchableOpacity>
                        <TitleFooter>Deletar Conta</TitleFooter>
                    </ViewFooter>
                </Footer>
            </Container>
        </>
    )
}