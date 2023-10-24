import { View, ProgressBarAndroid, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import GeneralButton2 from '../components/GeneralButton2';
import GeneralLittleTxt from '../components/GeneralLittleTxt';
import GeneralTxt from '../components/GeneralTxt';
import GeneralInput from '../components/GeneralInput';
import AnimatedInput from '../components/AnimatedInput';

export default function CreateAccount2({ navigation }) {
    const handleKeyboardDismiss = () => {
        Keyboard.dismiss();
    }
    return (
        <View style={styles.centeredContainer}>
            <GeneralTxt Txt="Crear cuenta" style={{ width: 175 }} />
            <GeneralLittleTxt Txt="Ingresa los datos que se solicitan" marginTop={-150} marginBottom={20} />
            <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
                <AnimatedInput 
                label="Usuario" 
                duration={300}
                width={'70%'} height={60}
                onChangeText={(text) => handleInputChange(1, text)}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
                <AnimatedInput label="Correo eléctronico" duration={300}  width={'70%'} height={60}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
                <AnimatedInput label="Contraseña" duration={300}  width={'70%'} height={60} secureTextEntry={true}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
                <AnimatedInput label="Confirmar Contraseña" duration={300} width={'70%'} height={60} secureTextEntry={true}/>
            </TouchableWithoutFeedback>
            <GeneralButton2 Txt="Continuar" style={{ fontSize:40, backgroundColor: "#64CCC5", marginTop:50, width:'60%', height:'25%' }} color="white" onPress={() => { navigation.navigate('LandPage') }} />
        </View>
    );
}

const styles = StyleSheet.create({
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
