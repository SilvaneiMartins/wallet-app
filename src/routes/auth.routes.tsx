import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Auth/Login';
import { Cadastro } from '../screens/Auth/Cadastro';
import { RecuperarSenha } from '../screens/Auth/RecuperarSenha';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='Login' component={Login} />
            <Screen name='Cadastro' component={Cadastro} />
            <Screen name='RecuperarSenha' component={RecuperarSenha} />
        </Navigator>
    )
}