import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function GeneralTxt2({ Txt, style }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{Txt}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        display:"flex",
      },
    text:{
     color:"black",
     marginTop:25,
     fontSize:28,
     fontWeight:'bold', 
    }
})
