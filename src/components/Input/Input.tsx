import React from 'react'
import Icon from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

import { Container, InputContainer } from './styles'

interface InputProps {
    RightIcon?: boolean;
    LeftIcon?: boolean;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
}

const Input: React.FC<InputProps & TextInputProps> = ({ RightIcon, LeftIcon, iconName, iconSize, iconColor, ...rest }) => {
    const { COLORS } = useTheme();

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
                placeholderTextColor={COLORS.GRAY3}
            />
            {RightIcon && (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.TEXTDARK}
                    style={{ padding: 5 }}
                />
            )}
        </Container>
    )
}

export default Input