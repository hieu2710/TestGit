import React from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
            Login Screen
            </Text>
            <Button title="Click Here" onPress={() => alert('Button Clicked')} />

        </View>
    );
};
export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});