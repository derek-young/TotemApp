import React from 'react';
import { Image, Text, View } from 'react-native';
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
        onPress={signin}
        size={50}>
        <Text style={{ color: 'white', fontSize: 20 }}>
          Login with Facebook
        </Text>
      </Icon.Button>
    </View>
  </View>
);

export default Auth;
