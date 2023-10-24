import React from "react";
import { Text, View,StyleSheet} from "react-native";
import { styles } from "../styles/Styles_CrearViaje";
import { Button } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";
import Checkbox from 'expo-checkbox';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const CrearViaje = ({navigation}) => {
    const [isOpen,setIsOpen] = useState(false);
    const [isOpen2,setIsOpen2] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [currentValue, setCurrentValue] = useState();
 
    const destinos = [
        {label:'Destino 1',value:"1"},
        {label:'Destino 2',value:"2"},
        {label:'Destino 3',value:"3"},
        {label:'Destino 4',value:"4"},
        {label:'Destino 5',value:"5"},
        {label:'Destino 6',value:"6"},
    ]

    const pasajeros = [
        {value : 1, label:'Un Pasajero'},
        {value : 2, label:'Dos Pasajeros'},
        {value : 3, label:'Tres Pasajeros'},
        {value : 4, label:'Cuatro Pasajeros'},
    ]
  
    return (
        <View style={styles.crearViaje}>
            <View style={styless.header}>
        <Ionicons
          style={styless.backButton}
          name="arrow-back"
          size={28}
          color="black"
          onPress={() => navigation.navigate("LandPage")}
        />

        <Text style={styles.LabelCrearViaje}>Crear Viaje</Text>
      </View>
            <View style={styles.ViewForm}>
                <Text style={styles.LabelsForms}>Destino</Text>
                <DropDownPicker
                    items={destinos}
                    open={isOpen}
                    setOpen={() => setIsOpen(!isOpen)}
                    value={currentValue}
                    setValue={val => setCurrentValue(val)}
                    maxHeight={150}
                    labelProps={destinos}

                    placeholder="Seleccione Destino"
                    placeholderStyle={{color:"#000000",fontWeight:"400", fontSize:20}}
                    />
                <Text style={styles.LabelsForms}>Costo Maximo Aproximado</Text>
                <TextInput 
                    placeholder="$"
                    style={[styles.LabelsForms,styles.txtStyle]}></TextInput>
                <Text style={styles.LabelsForms}>Gastos A Compartir</Text>
                <View style={[styles.checkboxview, styles.LabelsForms]}>           
                    <Checkbox 
                        style={styles.checkbox}
                        color="#000000" 
                        value={isChecked} 
                        onValueChange={setChecked}/>
                    <Text style={styles.LabelCheckBox}>Transporte</Text>    
                </View>    
                <View style={[styles.checkboxview, styles.LabelsForms]}>           
                    <Checkbox 
                        style={styles.checkbox}
                        color="#000000" 
                        value={isChecked2} 
                        onValueChange={setChecked2}/>
                    <Text style={styles.LabelCheckBox}>Hospedaje</Text>    
                </View> 
                <Text style={styles.LabelsForms}>Número de Pasajeros Que Se Pueden Unir Al Viaje</Text> 
                <DropDownPicker
                    items={pasajeros}
                    open={isOpen2}
                    setOpen={() => setIsOpen2(!isOpen2)}
                    value={currentValue}
                    setValue={val => setCurrentValue(val)}
                    maxHeight={150}
                    labelProps={destinos}

                    placeholder="Seleccione Pasajeros"
                    placeholderStyle={{color:"#000000",fontWeight:"400", fontSize:20}}
                    />
                <Text style={styles.LabelsForms}>Requisitos Extra</Text> 
                <TextInput style={[styles.LabelsForms,styles.txtStyle]}></TextInput>    
            </View>
            <View style={styles.viewbutton}>
            <Text style={styles.txtbtn}>Crear Viaje</Text>
            <Button 
                    containerStyle={styles.buttons}
                    buttonStyle={styles.buttonx}>
            </Button> 
            </View>
        </View>
    );
};
const styless = StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 50,
      marginLeft: 50,
    },
    backButton: {
      marginTop: 36,
      marginRight: 65,
      marginLeft: -20,
    },
  });
  
export default CrearViaje;