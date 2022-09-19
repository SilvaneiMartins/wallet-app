import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import { TextInputProps, Pressable } from 'react-native';
import { Eye, EyeSlash } from 'phosphor-react-native';

import { Container, InputContainer } from './styles'

interface InputProps extends TextInputProps {
    RightIcon?: boolean;
    LeftIcon?: boolean;
    iconName?: any;
    iconSize?: number;
    iconColor?: string;
}

const Input = ({
    RightIcon,
    LeftIcon,
    iconName,
    iconSize,
    iconColor,
    ...rest
}: InputProps) => {
    const { COLORS } = useTheme();

    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const handlePasswordVisible = () => {
        setIsPasswordVisible(v => !v);
    }

    return (
        <Container>
            {LeftIcon && (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.TEXTDARK}
                    style={{ padding: 5 }}
                />
            )}
            <InputContainer
                {...rest}
                secureTextEntry={isPasswordVisible}
                placeholderTextColor={COLORS.GRAY3}
            />
            {RightIcon && (
                <Pressable
                    onPress={handlePasswordVisible}
                >
                    {isPasswordVisible ? (
                        <Eye
                            name={iconName}
                            size={iconSize}
                            color={iconColor || COLORS.TEXTDARK}
                            style={{ padding: 5 }}
                        />
                    ) : (
                        <EyeSlash
                            name={iconName}
                            size={iconSize}
                            color={iconColor || COLORS.TEXTDARK}
                            style={{ padding: 5 }}
                        />
                    )}
                </Pressable>
            )}
        </Container>
    )
}

export default Input