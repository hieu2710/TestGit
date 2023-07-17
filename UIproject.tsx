import React, {useState} from 'react';
import {Button, Image, SafeAreaView,
  ScrollView,
  StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import backgroundImage from './screens/backgroundImage';
import BottomSheet from "react-native-bottomsheet-reanimated";
  const UIproject=() =>  {
return(
  <View style={{flex:1,backgroundColor:'black'}}>
 <Image  style={{height:'50%',width:'100%',resizeMode:'cover',marginTop:'50%',}} source= {{uri:'https://gifdb.com/images/high/netflix-logo-animation-rss7ixspt8igbfuc.gif',}} />
  </View>
 
);
  }
  export default UIproject;