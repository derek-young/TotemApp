import React from 'react';
import { Image, View } from 'react-native';

import authStyles from './authStyles';
import loadingGif from '../../img/loading.gif';

const Loading = () => (
	<View style={authStyles.loading}>
		<Image source={loadingGif} />
	</View>
);

export default Loading;
