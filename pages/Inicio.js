import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import GeneralButton2 from '../components/GeneralButton2'
import GeneralLittleTxt from '../components/GeneralLittleTxt'
import GeneralTxt from '../components/GeneralTxt'
import GeneralInput from '../components/GeneralInput'
import AnimatedInput from '../components/AnimatedInput'




export default function Inicio({navigation}) {
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
}
  return (
    <View style={styles.centeredContainer}>
    <GeneralTxt Txt="Iniciar sesión" style={{ width: 175 }} />
    <GeneralLittleTxt Txt="Ingresa tus datos para continuar" style={{ marginTop:-150, marginBottom:20}} />
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput label="Usuario / correo electrónico" duration={300} width={'70%'} height={60} onChangeText={(text) => handleInputChange(1, text)}/>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput label="Contraseña" duration={300} width={'70%'} height={60} secureTextEntry={true}/>
    </TouchableWithoutFeedback>
    <GeneralButton2 Txt="Continuar" style={{ backgroundColor: "#64CCC5", marginTop:50, width:'60%', height:'25%' }} color="white" onPress={() => { navigation.navigate('LandPage') }} />
</View>
  )
}
const styles = StyleSheet.create({
  centeredContainer: {
      justifyContent: 'center',
      alignItems: 'center',
  },
});
