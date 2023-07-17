
import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import Page from "../components/page";
import RoundedButton from "../components/RoundedButton";
import backgroundImage from "./backgroundImage";

const Dots = ({ selected }) => {
    let backgroundColor;
    let width;
    let borderRadius;
    backgroundColor = selected ? '#C13E31' : '#737373';
    width = 8,
        borderRadius = 50;
    return (
        <View style={{
            marginBottom: 90,
            height: 8,
            marginRight: 10,
            borderRadius,
            backgroundColor,
            width
        }}>

        </View>
    )
}
const Skip = ({ ...props }) => {
    return (
        <View style={{
            backgroundColor: '#C13E31',
            justifyContent: 'center',
            marginLeft: 15,
            height: 48,
            width: 100,
        }}>
            <TouchableOpacity {...props}  >
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 400,
                    textAlign: 'center',
                    fontFamily: 'Roboto',
                }}>Skip</Text>
            </TouchableOpacity>
        </View>
    )

};
const Next = ({ nextLabel, ...props }) => {


    return (
        <View style={{
            fontFamily: 'Roboto-Bold',
            backgroundColor: '#C13E31',
            justifyContent: 'center',
            marginRight: 15,
            height: 48,
            width: 100,
        }}>
            <TouchableOpacity {...props}  >
                <Text style={{

                    color: 'white',
                    fontSize: 20,
                    fontWeight: 400,
                    textAlign: 'center',
                    fontFamily: 'Roboto',
                }}>Next</Text>
            </TouchableOpacity>
        </View>
    )

};
const Done = ({ ...props }) => {
    return (
        <View style={{
            backgroundColor: '#C13E31',
            height: 48,
            width: 371,
            marginRight: 10,
            alignItems: 'center'
        }}>
            <TouchableOpacity {...props} title="GET STARTED"  >
                <Text style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    width: 371,
                    height: "100%",
                    textAlign: 'center',
                    marginTop: 10,
                    fontFamily: 'Roboto-Bold',


                }}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    )

};
const loadingScreen = () => {
    
                    
       <View style={{flex:1,backgroundColor:'black'}}>
<Image style={{ height: '70%', width: '100%', resizeMode: 'cover', marginTop: '1%', }}
             source={require('../assets/netflix-netflix-startup.gif')} />
       </View>
        
     
}
const OnboardingScreen = ({ navigation }) => {


    return (
              
        <Onboarding

            DotComponent={Dots}

            DoneButtonComponent={Done}

            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            onDone={() => navigation.navigate("Login")}
            onSkip={() => navigation.navigate("Login")}

            pages={[
                
                {
                    backgroundColor: 'black',
                    image: <Image style={styles.imageOnboardMain} source={require('../assets/imageMain.jpg')} />,
                    title: <Text style={styles.textOnboardMain}> No pesky contracts  </Text>,
                    subtitle: <Text style={styles.textOnboardSub}>Join today, cancel anytime.</Text>
                },
                {
                    backgroundColor: 'black',
                    image: <Image style={styles.imageOnboardMain} source={require('../assets/imageMain.jpg')} />,
                    title: <Text style={styles.textOnboardMain}> No pesky contracts </Text>,
                    subtitle: <Text style={styles.textOnboardSub}>Join today, cancel anytime.</Text>
                },
                {
                    backgroundColor: 'black',
                    image: <Image style={styles.imageOnboardMain} source={require('../assets/imageMain.jpg')} />,
                    title: <Text style={styles.textOnboardMain}> No pesky contracts </Text>,
                    subtitle: <Text style={styles.textOnboardSub}>Join today, cancel anytime.</Text>
                },
                {

                    backgroundColor: 'black',
                    title: <Text style={[styles.textOnboardMain, styles.textMainFinalOnboarding]}>How do I watch? </Text>,
                    subtitle: <Text style={[styles.textOnboardSub,styles.textOnboardSubFinal]}>Members that subscribe to Netflix can watch here in the app.</Text>
                }

            ]}

        />

    );

};
export default OnboardingScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageOnboardMain: {

        borderRadius: 10,
        marginTop: -250,
    },
    textOnboardMain: {
        textAlign: 'center',
        flexWrap: 'wrap',
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 36,
        fontWeight: 600,
        lineHeight: 45.5, /* 126.389% */
        letterSpacing: -0.408,

    },
    textOnboardSub: {
        width: 300,
        textAlign: 'center',
        flexWrap: 'wrap',
        fontFamily: 'Roboto',
        marginTop: 46,
        color: 'white',
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 27.5, /* 137.5% */
        letterSpacing: -0.408,
    },
    textMainFinalOnboarding: {
        justifyContent: 'center',
        
    },
    textOnboardSubFinal:{
    },
});