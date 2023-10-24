import { TouchableOpacity,Text,StyleSheet } from 'react-native'
import React from 'react'

export default function GeneralButton({onPressHandler,colorText,colorBg,text,padding,width,height,marginTop,marginBottom}) {

    const styles = StyleSheet.create({
        view:{
            backgroundColor: colorBg,
            alignItems: 'center',
            justifyContent: 'center',
            padding: padding,
            width: width,
            height: height,
            marginTop: marginTop,
            marginBottom: marginBottom
        },
        text:{
            color:colorText,
        }
    })

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.view}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}