import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile } from '../screens/App/Profile';
import { TabRoutes } from './tab.routes';

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
        </Navigator>
    )
}