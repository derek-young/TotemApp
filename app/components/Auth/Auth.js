import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles';
import authStyles from './authStyles';

const onSignInClick = () => console.log('signin')

const Auth = () => (
  <View style={[styles.container, authStyles.main]}>
    <Image style={authStyles.logo} source={require('../../img/logo_large.png')} />
    <View style={authStyles.button}>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={onSignInClick}>
        Login with Facebook
      </Icon.Button>
    </View>
  </View>
);

export default Auth;
