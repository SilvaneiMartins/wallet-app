import React from 'react';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    TouchableOpacityProps,
} from 'react-native';

import { variants } from './variants';
import { Container, Title, Content } from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: "primary" | "outline" | "black";
    style?: TouchableOpacityProps["style"];
}

export function ButtonPersonalizado({
    title,
    onPress,
    isLoading,
    iconName,
    disabled,
    variant = 'primary',
    style,
}: ButtonProps) {
    const { COLORS } = useTheme();
    const buttonVariant = variants[variant];
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

    return (
        <Container
            onPress={onPress}
            disabled={isLoading || disabled}
            style={[buttonStyle.button, style]}
        >
            {isLoading ? (
                <ActivityIndicator color={buttonStyle.icon.color} />
            ) : (
                <Content>
                    {iconName && (
                        <AntDesign
                            size={25}
                            name={iconName}
                            color={buttonStyle.icon.color}
                            style={{
                                marginRight: 15,
                            }}
                        />
                    )}
                    <Title>{title}</Title>
                </Content>
            )}
        </Container>
    )
}