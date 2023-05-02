import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ArrowCircleUp } from 'phosphor-react-native';

import { new_notifications } from '../../../utils/new_notifications';

import {
    Badge,
    ContentFlat,
    DataNotifications,
    TitleNotifications,
    NewNotificationsFlat,
    DataNotificationsText,
    TitleNotificationsText,
    NewButtonNotifications,
    DescriptionNotifications,
    DescriptionNotificationsText,
} from './styles';

interface IContentTopProps {
    datetime: string;
    title: string;
    type: string;
}


export const ContentTop = (props: IContentTopProps) => {
    const { COLORS } = useTheme();

    const [isVerify, setIsVerify] = useState<boolean>(false);

    const handleVerify = () => {
        setIsVerify(!isVerify);
    }

    return (
        <ContentFlat>
            <Badge />
            <NewNotificationsFlat>
                <DataNotifications>
                    <DataNotificationsText>
                        {props.datetime}
                    </DataNotificationsText>
                </DataNotifications>

                <TitleNotifications>
                    <TitleNotificationsText>
                        {props.title}
                    </TitleNotificationsText>
                </TitleNotifications>

                <DescriptionNotifications>
                    <DescriptionNotificationsText>
                        {props.type}
                    </DescriptionNotificationsText>
                </DescriptionNotifications>
            </NewNotificationsFlat>

            {isVerify ? (
                <NewButtonNotifications onPress={handleVerify}>
                    <ArrowCircleUp size={32} color={COLORS.RED} />
                </NewButtonNotifications>
            ) : (
                <NewButtonNotifications onPress={handleVerify}>
                    <ArrowCircleUp size={32} color={COLORS.GREEN2} />
                </NewButtonNotifications>
            )}
        </ContentFlat>
    )
}