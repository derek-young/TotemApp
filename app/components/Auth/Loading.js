import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './authStyles';
import loadingGif from '../../img/loading.gif';

const Loading = () => (
	<View style={styles.loading}>
		<Image source={loadingGif} />
	</View>
);

export default Loading;
