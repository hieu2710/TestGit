/**
 * @format
 */

import {AppRegistry} from 'react-native';
import UIproject from './UIproject';
import {name as appName} from './app.json'
import App from './App';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import Test from './Test';
import Page from './components/page';
import Footer from './components/footer';
import backgroundImage from './screens/backgroundImage';
import SplashScreen from './screens/splashscreen';
import FriJul from './FriJul';

AppRegistry.registerComponent(appName, () => FriJul); //component nào chạy đầu tiên
