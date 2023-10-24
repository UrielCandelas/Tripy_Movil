import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function GeneralLittleTxt({Txt, marginTop, marginBottom, textAlign, style}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{Txt}</Text>
    </View>
  )
}
const styles =StyleSheet.create({
    container:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      },
    text:{
      color:"black",
    }
})
