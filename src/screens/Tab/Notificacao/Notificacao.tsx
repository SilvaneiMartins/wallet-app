import React from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ArrowCircleUp } from 'phosphor-react-native';

import { Header } from '../../../components/Header';
import { new_notifications } from '../../../utils/new_notifications';

import {
    Container,
    ContentTop,
    ContentTopTitle,
    ContentBody,
    ContentBodyTitle,
    ContentFlat,
    DataNotifications,
    DataNotificationsText,
    NewNotificationsFlat,
    TitleNotifications,
    TitleNotificationsText,
    DescriptionNotifications,
    DescriptionNotificationsText,
    NewButtonNotifications,
 } from './styles';

export const Notificacao = () => {
    const { COLORS } = useTheme();

    return (
        <>
            <Header
                iconLeft
                typeNotification
                appName='Notificação'
            />
            <Container>
                <ContentTop>
                    <ContentTopTitle>Novo</ContentTopTitle>
                    <FlatList
                        data={new_notifications}
                        renderItem={({ item }) => (
                           <ContentFlat>
                                <NewNotificationsFlat>
                                    <DataNotifications>
                                        <DataNotificationsText>
                                            {item.datetime}
                                        </DataNotificationsText>
                                    </DataNotifications>

                                    <TitleNotifications>
                                        <TitleNotificationsText>
                                            {item.title}
                                        </TitleNotificationsText>
                                    </TitleNotifications>

                                    <DescriptionNotifications>
                                        <DescriptionNotificationsText>
                                            {item.type}
                                        </DescriptionNotificationsText>
                                    </DescriptionNotifications>
                                </NewNotificationsFlat>

                                <NewButtonNotifications>
                                    <ArrowCircleUp size={32} color={COLORS.GREEN2} />
                                </NewButtonNotifications>
                           </ContentFlat>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </ContentTop>

                <ContentBody>
                    <ContentBodyTitle>Recentes</ContentBodyTitle>

                </ContentBody>
            </Container>
        </>
    )
}