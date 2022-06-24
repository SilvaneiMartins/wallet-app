import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import PngGoogle from "../../assets/google.png";
import { Button, IconeGogle, Title } from "./styles";

interface Props extends RectButtonProps {
    title: string
}

const ButtonSocialGoogle: React.FC<Props> = ({ title, ...rest }) => {
    return (
        <Button {...rest}>
            <IconeGogle source={PngGoogle} resizeMode="contain" />
            <Title>{title}</Title>
        </Button>
    );
};

export { ButtonSocialGoogle };
