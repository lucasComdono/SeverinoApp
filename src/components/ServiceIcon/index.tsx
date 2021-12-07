import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './style';


export function ServiceIcon() {
    const uri = 'https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?fakeurl=1&type=.jpg';
    return(
        <Image 
        source={{ uri }} 
        style={styles.image}
        resizeMode="cover"/>   
    );
}
