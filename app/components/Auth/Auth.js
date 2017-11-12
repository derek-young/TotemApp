import React from 'react';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoLarge from '../../img/logo_large.png';

import { signin } from '../../redux/actions';
import authStyles from './authStyles';

const Auth = () => (
  <View style={authStyles.main}>
    <Image style={authStyles.logo} source={logoLarge} />
    <View style={authStyles.button}>
      <Icon.Button
        name="facebook"
        onPress={signin}>
        Login with Facebook
      </Icon.Button>
    </View>
  </View>
);

export default Auth;
