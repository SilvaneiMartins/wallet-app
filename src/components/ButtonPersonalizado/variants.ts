import theme from '../../styles/theme';

interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
    };
    title: {
        color: string;
        fontSize?: number,
    };
    icon: {
        color: string;
    };
}

export interface ButtonVariant {
    enabled: ButtonStyle;
    disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.PRIMARY,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
}

const buttonOutLine: ButtonVariant = {
    enabled: {
        button: {
            borderWidth: 2,
            borderColor: theme.COLORS.PRIMARY,
            backgroundColor: 'transparent',
        },
        title: {
            color: theme.COLORS.GRAY1,
        },
        icon: {
            color: theme.COLORS.GRAY1,
        },
    },
    disabled: {
        button: {
            borderWidth: 2,
            borderColor: theme.COLORS.PRIMARY,
            backgroundColor: 'transparent',
        },
        title: {
            color: theme.COLORS.GREEN1,
        },
        icon: {
            color: theme.COLORS.GREEN1,
        },
    },
}

const buttonBlack: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.BLACK,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
};

const buttonTransparent: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: 'transparent',
        },
        title: {
            color: theme.COLORS.GRAY2,
            fontSize: 17,
        },
        icon: {
            color: theme.COLORS.GRAY2,
        }
    },
    disabled: {
        button: {
            backgroundColor: 'transparent',
        },
        title: {
            color: theme.COLORS.GRAY2,
            fontSize: 17,
        },
        icon: {
            color: theme.COLORS.GRAY2,
        }
    }
}

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutLine,
    black: buttonBlack,
    transparent: buttonTransparent,
};