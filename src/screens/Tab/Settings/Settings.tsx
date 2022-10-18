import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { SignOut } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();

    const handleGoPerfilUser = () => {
        navigation.navigate('Profile');
    }

    return (
        <>
            <Header appName='Configuração' />
            <Container>

                <Profile
                    iconLeft
                    typeUser
                    name='Perfil do Usuário'
                    onPress={handleGoPerfilUser}
                />

                <Profile
                    iconLeft
                    typeNotification
                    name='Notificações'
                    onPress={() => { }}
                />

                <Profile
                    iconLeft
                    typeWalet
                    name='Minha Carteira'
                    onPress={() => { }}
                />

                <Profile
                    iconLeft
                    typeLogin
                    name='Configuração Login'
                    onPress={() => { }}
                />

                <Profile
                    iconLeft
                    typeCall
                    name='Central Serviços'
                    onPress={() => { }}
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