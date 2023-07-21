import React, { useRef, useState } from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
const FriJul = () => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(0);
    const handleIncrement = () => { 
    };
    const handlesueRef = () => {
        counterRef.current += 1
        console.log('Current value:', counterRef.current);
    }
    return (
        <View style={{ flexDirection: 'column', flex: 1, padding: 30, }}>
            <Button title="useState" onPress={handleIncrement} />
            <Text style={{ textAlign: 'center' }}>Giá trị hiện tại: {count}</Text>
            <Button title="useRef" onPress={handlesueRef} />
            <Text style={{ textAlign: 'center' }}> Giá trị hiện tại: {counterRef.current}</Text>
        </View>
    );

}
export default FriJul;
const styles = StyleSheet.create({

});
