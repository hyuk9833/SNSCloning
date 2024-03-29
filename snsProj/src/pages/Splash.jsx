import {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import myStyle from '../styles/myStyle';

const logoIcon = require('../assets/icons/logo.png');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainTab');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={myStyle.displayWrapper}>
      <Image source={logoIcon} />
    </SafeAreaView>
  );
};

export default Splash;
