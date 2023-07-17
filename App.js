
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,createSwitchNavigator,createBottomTabNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';

const AppStack = createStackNavigator();
const App = () => {
  const [isFirstLaunch, setFirstLaunch] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    });
  }, []);
  if( isFirstLaunch ==null ) {
    return null;
  } else if (isFirstLaunch == true) {
  
  return (
    <NavigationContainer>
      <AppStack.Navigator >

        <AppStack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'black',
              borderBottomColor: 'white',
              borderBottomWidth:1,
              
            },
            headerLeft: () => (

              <Image style={{ width: 117, height: 49, marginLeft: 12.5 }} source={require('./assets/logoNet.jpg')} />
            ),
            headerRight: () => (

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => alert('Button Clicked')} >
                  <Text style={[styles.textHeaderRight, styles.textHeaderRightMarginFix,]}>
                    Privacy
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert('Button Clicked')} >
                  <Text style={styles.textHeaderRight}>
                    Help
                  </Text>
                </TouchableOpacity>
              </View>
            ),
            headerTitle: () => (
              <Text></Text>
            ),

          }}
          name="Onboarding"
          component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );

  } else {
    return <LoginScreen />
  }

}
const styles = StyleSheet.create({
  textHeaderRight: {
fontFamily:'Roboto',
    color: 'white',
    marginRight: 13.5,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 22, /* 137.5% */
    letterSpacing: -0.408,
    

  },
  textHeaderRightMarginFix: {
    marginRight: 12,
  },
});
export default App;
