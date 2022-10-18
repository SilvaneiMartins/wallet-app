import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { View, ActivityIndicator, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import theme from "../src/styles/theme";
import { Routes } from './routes'

export const App = () => {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    });

    if (!fontsLoaded) {
        return <ActivityIndicator />;
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <StatusBar style="dark" translucent backgroundColor="transparent" />
                <View
                    style={{
                        flex: 1,
                        backgroundColor: theme.COLORS.WHITE_100,
                    }}
                >
                    <Routes />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    );
};