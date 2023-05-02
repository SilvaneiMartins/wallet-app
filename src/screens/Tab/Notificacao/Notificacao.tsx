import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ArrowCircleUp } from 'phosphor-react-native';

import { Header } from '../../../components/Header';
import { new_notifications } from '../../../utils/new_notifications';
import { ContentTop } from '../../../components/Notifications/ContentTop';
import { recents_notifications } from '../../../utils/recent_notifications';

import {
    Container,
    ContentBody,
    ContentFlat,
    ContentHeader,
    ContentTopTitle,
    ContentBodyTitle,
    DataNotifications,
    TitleNotifications,
    NewNotificationsFlat,
    DataNotificationsText,
    TitleNotificationsText,
    NewButtonNotifications,
    DescriptionNotifications,
    DescriptionNotificationsText,
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
                <ContentHeader>
                    <ContentTopTitle>Novo</ContentTopTitle>
                    <FlatList
                        data={new_notifications}
                        renderItem={({ item }) => (
                            <ContentTop
                                datetime={item.datetime}
                                title={item.title}
                                type={item.type}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </ContentHeader>

                <ContentBody>
                    <ContentBodyTitle>Recentes</ContentBodyTitle>
                    <FlatList
                        data={recents_notifications}
                        keyExtractor={(item) => item.id.toString()}
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
                        contentContainerStyle={{
                            paddingBottom: 20
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </ContentBody>
            </Container>
        </>
    )
}