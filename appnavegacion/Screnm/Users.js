import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Users() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Users</Text>
                 
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'pink',
    },
    texto:{
        color : 'black',
        fontSize : 30,
        fontWeight : 'bold',
    }
})