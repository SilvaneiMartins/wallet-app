import React from 'react';
import { BellSimpleRinging, ChartBarHorizontal, CurrencyCircleDollar } from 'phosphor-react-native';

import {
    Container,
    ContentHeader,
    Avatar,
    AppName,
    Status,
    IconButton,
} from './styles';

interface IHeader {
    appName: string;
    iconLeft?: boolean;
    textLeft?: boolean;
    avatarRight?: boolean;
    typeRelatorio?: boolean;
    typeTransaction?: boolean;
    typeNotification?: boolean;
}

export const Header = ({
    iconLeft,
    typeRelatorio,
    appName,
    textLeft,
    avatarRight,
    typeTransaction,
    typeNotification,
}: IHeader) => {
    return (
        <Container>
            {iconLeft && (
                <>
                    {typeRelatorio && (
                        <ChartBarHorizontal
                            size={32}
                            weight="light"
                            style={{
                                marginLeft: 10,
                            }}
                        />
                    )}
                    {typeNotification && (
                        <BellSimpleRinging
                            size={32}
                            weight="light"
                            style={{
                                marginLeft: 10,
                            }}
                        />
                    )}
                    {typeTransaction && (
                        <CurrencyCircleDollar
                            size={32}
                            weight="light"
                            style={{
                                marginLeft: 10,
                            }}
                        />
                    )}
                </>
            )}
            <ContentHeader>
                <AppName>{appName}</AppName>
                {textLeft && (
                    <Status>Ativo</Status>
                )}
            </ContentHeader>
            {avatarRight && (
                <Avatar
                    source={{ uri: 'https://avatars.githubusercontent.com/u/4657811?v=4' }}
                />
            )}
        </Container>
    )
}