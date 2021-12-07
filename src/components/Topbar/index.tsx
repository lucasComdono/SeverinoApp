import React from 'react';
import { Text, View, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { SimpleLineIcons } from '@expo/vector-icons'; 
import { styles } from './style';



export function Topbar() {

    const navigation = useNavigation();

    function Back(){
        navigation.goBack();
    }

    return(
            <TouchableOpacity
                style={styles.container}
                onPress={Back}
            >
                <SimpleLineIcons name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
    );
}
