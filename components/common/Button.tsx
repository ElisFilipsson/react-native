import React from 'react';
import { Button, Alert } from 'react-native';

interface ButtonProps {
    title: string,
    accessibilityLabel?: string,
    color?: string
}
const CustomButton: React.SFC<ButtonProps> = (props) => {
    return (
        <Button
            title={props.title}
            onPress={() => Alert.alert('Simple Button pressed')}
            color={props.color}
            accessibilityLabel={props.accessibilityLabel}
        />
    );
}
CustomButton.defaultProps = {
    title: "Guest User",
    color: "#841584"
}