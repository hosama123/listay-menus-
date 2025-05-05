import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-web';

export default function Home() {
const navigation = useNavigation();
  return (
    <View style={{backgroundColor:'#1b2',flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home</Text>
      <Button title='go a Detalles' onPress={() => navigation.navigate('DetailHome')}></Button>

    </View>
  )
}

/*const styles = StyleSheet.create({
    contenedor:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'white',
    },
    texto:{
        color : 'black',
        fontSize : 30,
        fontWeight : 'bold',
    }
})*/