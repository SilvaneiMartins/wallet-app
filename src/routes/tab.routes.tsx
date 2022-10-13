import React from 'react';
import { View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreditCard, ChartBar, Bell, GearSix } from 'phosphor-react-native';

import theme from '../styles/theme';
import { Settings } from '../screens/Tab/Settings';
import { Carteira } from '../screens/Tab/Carteira';
import { Relatorio } from '../screens/Tab/Relatorio';
import { Notificacao } from '../screens/Tab/Notificacao';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName='Carteira'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarInactiveTintColor: theme.COLORS.GRAY4,
                tabBarActiveTintColor: theme.COLORS.GRAY1,
                tabBarStyle: {
                    paddingBottom: 7,
                    backgroundColor: theme.COLORS.GRAY6,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    color: theme.COLORS.GRAY3,
                }
            }}
        >
            <Screen
                name='Carteira'
                component={Carteira}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {focused ? (
                                <CreditCard
                                    size={25}
                                    weight="fill"
                                    color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                                />
                            ) : (
                                <CreditCard
                                    size={25}
                                    weight="light"
                                    color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                                />
                            )}
                        </View>
                    )
                }}
            />
            <Screen
                name='Relatorio'
                component={Relatorio}
                options={{
                    tabBarLabel: 'Relatório',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {focused ? (
                                <ChartBar
                                    size={25}
                                    weight="fill"
                                    color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                                />
                            ) : (
                                <ChartBar
                                    size={25}
                                    weight="light"
                                    color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                                />
                            )}
                        </View>
                    )
                }}
            />
            <Screen
                name='Notificacao'
                component={Notificacao}
                options={{
                    tabBarLabel: 'Notificação',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {focused ? (
                                <Bell
                                    size={25}
                                    weight="fill"
                                    color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                                />
                            ) : (
                                <Bell
                                    size={25}
                                    weight="light"
                                    color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                                />
                            )}
                        </View>
                    )
                }}
            />
            <Screen
                name='Settings'
                component={Settings}
                options={{
                    tabBarLabel: 'Configuração',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                marginTop: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {focused ? (
                                <GearSix
                                    size={25}
                                    weight="fill"
                                    color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                                />
                            ) : (
                                <GearSix
                                    size={25}
                                    weight="light"
                                    color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3}
                                />
                            )}
                        </View>
                    )
                }}
            />
        </Navigator>
    )
}