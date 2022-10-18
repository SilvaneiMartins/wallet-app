import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import {
    User,
    CaretRight,
    BellSimple,
    Wallet,
    Password,
    PhoneCall,
} from "phosphor-react-native";

import {
    Container,
    ViewProfile,
    ProfileName,
    ViewRight,
    ViewIcon,
} from './styles';

interface IProfile {
    name: string;
    iconLeft?: boolean;
    iconRight?: boolean;
    typeUser?: boolean;
    typeNotification?: boolean;
    typeWalet?: boolean;
    typeLogin?: boolean;
    typeCall?: boolean;
    onPress: () => void;
}

export const Profile = ({
    name,
    iconLeft,
    iconRight,
    typeCall,
    typeLogin,
    typeNotification,
    typeUser,
    typeWalet,
    onPress,
}: IProfile) => {
    const { COLORS } = useTheme();

    const navigation = useNavigation();

    return (
        <>
            <Container>
                <ViewProfile>
                    {iconLeft && (
                        <>
                            {typeUser && (
                                <ViewIcon>
                                    <User
                                        size={27}
                                        weight="bold"
                                        color={COLORS.PURPLE_CARD}
                                    />
                                </ViewIcon>
                            )}
                            {typeNotification && (
                                <ViewIcon>
                                    <BellSimple
                                        size={27}
                                        weight="bold"
                                        color={COLORS.PURPLE_CARD}
                                    />
                                </ViewIcon>
                            )}
                            {typeWalet && (
                                <ViewIcon>
                                    <Wallet
                                        size={27}
                                        weight="bold"
                                        color={COLORS.PURPLE_CARD}
                                    />
                                </ViewIcon>
                            )}
                            {typeLogin && (
                                <ViewIcon>
                                    <Password
                                        size={27}
                                        weight="bold"
                                        color={COLORS.PURPLE_CARD}
                                    />
                                </ViewIcon>
                            )}
                            {typeCall && (
                                <ViewIcon>
                                    <PhoneCall
                                        size={27}
                                        weight="bold"
                                        color={COLORS.PURPLE_CARD}
                                    />
                                </ViewIcon>
                            )}
                        </>
                    )}
                    <ViewRight>
                        <ProfileName>{name}</ProfileName>
                        <TouchableOpacity onPress={onPress}>
                            <CaretRight
                                size={23}
                                weight="bold"
                                color={COLORS.PURPLE_CARD}
                            />
                        </TouchableOpacity>
                    </ViewRight>
                </ViewProfile>
            </Container>
        </>
    )
}