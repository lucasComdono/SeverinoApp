import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from '../../screens/Preload/styles';
import { Category } from '../Category';


export function CategorySelect(){
    const interests = [
        {
            id: '1',
            title: 'Casa'
        },
        {
            id: '2',
            title: 'Comida'
        },
        {
            id: '3',
            title: 'Carros'
        },
        {
            id: '4',
            title: 'Saude'
        },            
    ]
    return(
            
            <FlatList 
                data={interests}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
                renderItem={(({item}) => (
                    <Category 
                        data={item}
                    />
                ))}
                contentContainerStyle={{
                    alignItems: 'center'
                }}
            />
           
       
    );
}
