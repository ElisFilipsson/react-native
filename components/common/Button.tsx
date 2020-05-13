import React from 'react';
import { Button, Alert, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

interface ButtonProps {
    label: string,
    title?: string,
    color?: string,
    onAction: (ev?: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const CustomButton: React.SFC<ButtonProps> = (props) => {
    return (
        <Button
            title={props.label}
            onPress={props.onAction}
            color={props.color}
            accessibilityLabel={props.title}
        />
    );
}
CustomButton.defaultProps = {
    label: "Click me",
    onAction: () => { Alert.alert("Hello World!"); },
    color: "#841584"
}