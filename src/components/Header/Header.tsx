import React from 'react';
import { View, Text } from 'react-native';

import {
    Container,
    ContentHeader,
    Avatar,
    AppName,
    Status,
} from './styles';

export const Header = () => {
    return (
        <Container>
           <ContentHeader>
                <AppName>Wallet</AppName>
                <Status>Ativo</Status>
           </ContentHeader>
           <Avatar
                source={{ uri: 'https://avatars.githubusercontent.com/u/4657811?v=4' }}
           />
        </Container>
    )
}