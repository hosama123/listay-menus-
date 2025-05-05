import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Setting() {
  return (
    <View styles={styles.contenedor}>
      <Text style={styles.texto}>Setting</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'green',
    },
    texto:{
        color : 'black',
        fontSize : 30,
        fontWeight : 'bold',
    }
})