import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { SignOut } from 'phosphor-react-native';

import { Header } from '../../../components/Header';
import { Profile } from '../../../components/Profile';
import {
    Container,
    ViewFooter,
    TitleFooter,
    ViewIconButton
} from './styles';

export const Settings = () => {
    const { COLORS } = useTheme();

    return (
        <>
            <Header appName='Configuração' />
            <Container>

                <Profile
                    iconLeft
                    typeUser
                    name='Perfil'
                />

                <Profile
                    iconLeft
                    typeNotification
                    name='Notificação'
                />

                <Profile
                    iconLeft
                    typeWalet
                    name='Minha Carteira'
                />

                <Profile
                    iconLeft
                    typeLogin
                    name='Configuração Login'
                />

                <Profile
                    iconLeft
                    typeCall
                    name='Central Serviços'
                />

                <ViewFooter>
                    <TouchableOpacity>
                        <ViewIconButton>
                            <SignOut
                                size={36}
                                weight="light"
                                color={COLORS.PURPLE_CARD}
                            />
                        </ViewIconButton>
                    </TouchableOpacity>
                    <TitleFooter>Sair da Wallet</TitleFooter>
                </ViewFooter>
            </Container>
        </>
    )
}