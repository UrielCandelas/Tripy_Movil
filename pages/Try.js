import { View, ProgressBarAndroid, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import GeneralButton2 from '../components/GeneralButton2';
import GeneralLittleTxt from '../components/GeneralLittleTxt';
import GeneralTxt from '../components/GeneralTxt';
import GeneralInput from '../components/GeneralInput';
import AnimatedInput from '../components/AnimatedInput';

export default function CreateAccount2({ navigation }) {
    const [inputValues, setInputValues] = useState(["", "", ""]);
    const [inputCompleted, setInputCompleted] = useState([false, false, false]);

    useEffect(() => {
        // Calcula el progreso en función de los campos completados
        const completedCount = inputCompleted.filter((isCompleted) => isCompleted).length;
        const increment = 12.5;
        const newProgress = (completedCount * increment) + 37.5;
        setProgress(newProgress);
    }, [inputCompleted]);

    const handleInputChange = (index, text) => {
        const updatedInputValues = [...inputValues];
        updatedInputValues[index] = text;

        setInputValues(updatedInputValues);

        // Marca el campo como completado si no está vacío
        const isInputEmpty = text.trim() === '';
        const updatedInputCompleted = [...inputCompleted];
        updatedInputCompleted[index] = !isInputEmpty;
        setInputCompleted(updatedInputCompleted);
    };

    const [progress, setProgress] = useState(37.5); // Valor inicial de 37.5
    const handleKeyboardDismiss = () => {
        Keyboard.dismiss();
    }
    return (
        <View>
            <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={progress / 100}
                style={{ marginTop: 25, color: "#176B87" }}
            />
            <GeneralTxt Txt="Crear cuenta" style={{ width: 175 }} />
            <GeneralLittleTxt Txt="Ingresa los datos que se solicitan" marginTop={-150} marginBottom={20} />
            <GeneralInput
                placeholder="Nombre de Usuario"
                style={{ marginBottom: 20 }}
                flexDirection="row"
                justifyContent="center"
                onChangeText={(text) => handleInputChange(0, text)}
            />
            <GeneralInput
                placeholder="Correo eléctronico"
                style={{ marginBottom: 20 }}
                flexDirection="row"
                justifyContent="center"
                onChangeText={(text) => handleInputChange(1, text)}
            />
            <View style={styles.centeredContainer}>
            <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
                <AnimatedInput 
                label="Usuario" 
                duration={300}
                onChangeText={(text) => handleInputChange(1, text)}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
                <AnimatedInput label="Correo eléctronico" duration={300} style={{flexDirection:"row", justifyContent:"center"}}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
                <AnimatedInput label="Confirmar Contraseña" duration={300}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
                <AnimatedInput label="Contraseña" duration={300}/>
            </TouchableWithoutFeedback>
            </View>
                <GeneralInput
                    placeholder="Contraseña"
                    style={{ marginBottom: 20 }}
                    flexDirection="row"
                    justifyContent="center"
                    onChangeText={(text) => handleInputChange(2, text)}
                />
            <GeneralButton2 Txt="Continuar" style={{ marginTop: 50 }} color="white" onPress={() => { navigation.navigate('CreateAccount2') }} />
        </View>
    );
}

const styles = StyleSheet.create({
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
