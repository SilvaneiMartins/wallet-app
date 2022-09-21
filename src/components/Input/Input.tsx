import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import { TextInputProps, TouchableOpacity } from 'react-native';

import { Container, InputContainer } from './styles'

interface InputProps extends TextInputProps {
    iconSize?: number;
    iconColor?: string;
    LeftIcon?: boolean;
    RightIcon?: boolean;
    iconName: keyof typeof Icon.glyphMap;
    secureTextEntry?: boolean;
}

const Input = ({
    RightIcon,
    LeftIcon,
    iconName,
    iconSize,
    iconColor,
    secureTextEntry = true,
    ...rest
}: InputProps) => {
    const { COLORS } = useTheme();

    const [secury, setSecury] = useState(secureTextEntry);

    return (
        <Container>
            {LeftIcon && (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.GRAY2}
                    style={{ padding: 5 }}
                />
            )}
            <InputContainer
                {...rest}
                secureTextEntry={secury}
                underlineColorAndroid='transparent'
                placeholderTextColor={COLORS.GRAY3}
            />
            {RightIcon && (
                <TouchableOpacity onPress={() => setSecury(!secury)}>
                    <Icon
                        name={secury ? 'eye' : 'eye-off'}
                        size={iconSize}
                        color={iconColor || COLORS.GRAY2}
                        style={{ padding: 5 }}
                    />
                </TouchableOpacity>
            )}
        </Container>
    )
}

export default Input