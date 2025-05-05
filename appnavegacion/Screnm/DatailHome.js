import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { Button } from 'react-native-web';

export default function DatailHome() {
  return (
    <View style={{backgroundColor:'pink',flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home</Text>
      <Button title='go a detalles' onPress={() => navigation.navigate('DetailHome')}></Button>

    </View>
  )
}