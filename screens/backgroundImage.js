
import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

const backgroundImage = () => {
    return (
        <View style={{flex:1,flexDirection:'row',}}>
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 51, }}>
                <Image
                    style={styles.imageOnboardLeft}
                    source={require('../assets/johnwick.jpg')}
                />
                <Image
                    style={styles.imageOnboardLeft}
                    source={require('../assets/gridImage.jpg')}
                />
                <Image
                    style={styles.imageOnboardLeft}
                    source={require('../assets/gridImage.jpg')}
                />
                <Image
                    style={styles.imageOnboardLeft}
                    source={require('../assets/gridImage.jpg')}
                />
            </View>
            <View style={{flex: 1, flexDirection: 'column', marginTop: 65,}}>
            <Image
                    style={styles.imageOnboardCenter}
                    source={require('../assets/gridImage.jpg')}
                />
                <Image
                    style={styles.imageOnboardCenter}
                    source={require('../assets/gridImage.jpg')}
                />
                <Image
                    style={styles.imageOnboardCenter}
                    source={require('../assets/gridImage.jpg')}
                />
                <Image
                    style={styles.imageOnboardCenter}
                    source={require('../assets/gridImage.jpg')}
                />
                <Image
                    style={styles.imageOnboardCenter}
                    source={require('../assets/gridImage.jpg')}
                />
            </View>
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 51, }}>
                <Image
                    style={styles.imageOnboardLeft}
                    source={require('../assets/gridImage.jpg')}
                />
                <Image
                    style={styles.imageOnboardLeft}
                    source={require('../assets/gridImage.jpg')}
                />
                <Image
                    style={styles.imageOnboardLeft}
                    source={require('../assets/gridImage.jpg')}
                />
                <Image
                    style={styles.imageOnboardLeft}
                    source={require('../assets/gridImage.jpg')}
                />
            </View>
        </View>





    );

};

const styles = StyleSheet.create({
    imageOnboardLeft: {
        marginBottom: 8,
        width: 140,
        height: 181,
    },
    imageOnboardCenter:{
        marginLeft:20,
        marginBottom: 8.5,
        width: 100,
        height: 140,
    },
})
export default backgroundImage;