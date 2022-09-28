import React from 'react';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import {
    ActivityIndicator,
    TouchableOpacityProps,
} from 'react-native';

import { variants } from './variants';
import { Container, Title, Content } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    style?: TouchableOpacityProps["style"];
    variant?: "primary" | "outline" | "black" | 'transparent';
    iconName?: keyof typeof AntDesign.glyphMap;
}

export function ButtonPersonalizado({
    title,
    onPress,
    isLoading,
    iconName,
    disabled,
    variant = 'primary',
    style,
    ...rest
}: ButtonProps) {
    const { COLORS } = useTheme();
    const buttonVariant = variants[variant];
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

    return (
        <Container
            {...rest}
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
                    <Title color={[buttonStyle.title.color]}>{title}</Title>
                </Content>
            )}
        </Container>
    )
}