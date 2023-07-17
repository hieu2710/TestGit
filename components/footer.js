import React from 'react';
import { View,TouchableOpacity,styles } from 'react-native';
import OnboardingScreen from '../screens/OnboardingScreen';
const Footer = () => {
  return (
    <View>
      {/* Indicator container */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        
      </View>

      {/* Render buttons */}
      <View style={{marginBottom: 20}}>
        {currentSlideIndex == slides.length - 1 ? (
          <View style={{height: 50}}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.replace('HomeScreen')}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.btn,
                {
                  borderColor: COLORS.white,
                  borderWidth: 1,
                  backgroundColor: 'transparent',
                },
              ]}
              onPress={skip}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: COLORS.white,
                }}>
                SKIP
              </Text>
            </TouchableOpacity>
            <View style={{width: 15}} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={goToNextSlide}
              style={styles.btn}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Footer;
