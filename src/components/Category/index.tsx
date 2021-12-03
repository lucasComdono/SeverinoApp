import React from 'react';
import {  View, Text, Pressable} from 'react-native';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 

import { styles } from './styles';

export type CategoryProps = {
    id: string;
    title: string;
}

type Props = RectButtonProps & {
    data: CategoryProps;
    checked?: boolean;
}

export function Category({ data, checked, ...rest }:Props) {
    return(
            <RectButton 
                style={styles.container}
                
                { ...rest }
            >
                <View style={[styles.button, checked ? styles.checked : styles.check]}>

                    <Feather name="check" size={24} style={checked ? styles.checkedIcon : styles.checkIcon} />
                    <Text style={styles.title}>{data.title}</Text>
   
                </View> 
            </RectButton>
        
    )}
