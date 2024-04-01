import {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import myStyle from '../styles/myStyle';
import {login} from '../apis/auth';

const logoIcon = require('../assets/icons/logo.png');

const Splash = ({navigation}) => {
  useEffect(() => {
    login();
    setTimeout(() => {
      navigation.replace('MainTab');
    }, 2000);
  }, []);
  return (
    <SafeAreaView
      style={[
        myStyle.displayWrapper,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <Image source={logoIcon} style={{width: 100, height: 100}} />
    </SafeAreaView>
  );
};

export default Splash;
