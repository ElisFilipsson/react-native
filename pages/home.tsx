import React from 'react';
import { useTranslation, UseTranslationResponse, I18nextProvider } from 'react-i18next';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeComponent() {

    const { t }: UseTranslationResponse = useTranslation();


    return (
        <View style={styles.container}>
            <Text style={styles.separate}>{t('introduction')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    separate: {
        marginTop: 50,
    },
});