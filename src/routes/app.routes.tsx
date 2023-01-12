import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabRoutes } from './tab.routes';
import { Profile } from '../screens/App/Profile';
import { AddCartao } from '../screens/App/AddCartao';
import { DetailsCard } from '../screens/App/DetailsCard';
import { Transaction } from '../screens/App/Transcation';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator
            initialRouteName='TabRoutes'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='TabRoutes' component={TabRoutes} />
            <Screen name='Profile' component={Profile} />
            <Screen name='AddCartao' component={AddCartao} />
            <Screen name='DetailsCard' component={DetailsCard} />
            <Screen name='Transaction' component={Transaction} />
        </Navigator>
    )
}