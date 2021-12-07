import React, { useState, useEffect} from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import firebase from '../../config/firebaseConfig';
import { styles } from './styles';

import Avatar from '../../assets/avatar.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Service } from '../../components/Service';
import { database } from '../../config/firebaseConfig';

export function Home() {

    const servicos = [
        {  id: '1', name: 'Maquiadora Jéssica', city: 'Asa Norte', price: '200 - 300', icon: null },
        {  id: '2', name: 'Eletricista S/M', city: 'Asa Norte', price: '200 - 300', icon: null },
        {  id: '3', name: 'Churrasqueiro', city: 'Asa Norte', price: '200 - 300', icon: null },
        {  id: '4', name: 'Beto Serviços de Casa', city: 'Asa Norte', price: '200 - 300', icon: null },
        {  id: '5', name: 'Informatica Zen', city: 'Asa Norte', price: '200 - 300', icon: null },
    ]

    const [Servico, setServico] = useState([]);
    function  deleteServico(id: any){
        database.collection('Servicos').doc(id).delete();
    }
    useEffect(() => {
        database.collection('Servicos').onSnapshot((query)=>{
            const list:any = [];
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id});
            })
            setServico(list);
        })
    }, [])

    return (
        <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Bem vinda Emília</Text>
                    <Image
                        style={styles.avatar}
                        source={Avatar} 
                    />
                </View>
                <SearchBar 
                    placeholder={'Digite sua procura...'} 
                    onChangeText={undefined} 
                    value={undefined}                    
                />      
                <View style={styles.header}>
                    <Text style={styles.title2}>Serviços</Text>
                    <TouchableOpacity>
                        <Text style={styles.subtitle}>Ver todos</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    style={{width: '100%'}}
                    data={servicos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Service data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                />
        </View>
    );

}
