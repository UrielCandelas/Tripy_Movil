import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { styles } from "../styles/Styles_CrearViaje";
import { Button } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const AgregarGastos = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const [visible, setVisible] = useState(false);

  const destinos = [
    { label: "Destino 1", value: "1" },
    { label: "Destino 2", value: "2" },
    { label: "Destino 3", value: "3" },
    { label: "Destino 4", value: "4" },
    { label: "Destino 5", value: "5" },
    { label: "Destino 6", value: "6" },
  ];

  const pasajeros = [
    { value: 1, label: "Un Pasajero" },
    { value: 2, label: "Dos Pasajeros" },
    { value: 3, label: "Tres Pasajeros" },
    { value: 4, label: "Cuatro Pasajeros" },
  ];
  return (
    <>
      <View>
        <View style={styles.ViewForm}>
        <View style = {styless.header}>
          <Ionicons
            style={styless.backButton}
            name="arrow-back"
            size={28}
            color="black"
            onPress={() => navigation.navigate("LandPage")}
          />

          <Text style={styles.LabelCrearViaje}>Añadir Gasto</Text>
        </View>
          <Text style={styles.LabelsForms}>
            ¿A que viaje deseas añadir el gasto?
          </Text>
          <DropDownPicker
            items={destinos}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={currentValue}
            setValue={(val) => setCurrentValue(val)}
            maxHeight={150}
            labelProps={destinos}
            placeholder="Seleccione Viaje"
            placeholderStyle={{
              color: "#000000",
              fontWeight: "400",
              fontSize: 20,
            }}
          />
          <Text style={styles.LabelsForms}>
            Número de pasajeros entre los que se divide
          </Text>
          <DropDownPicker
            items={pasajeros}
            open={isOpen2}
            setOpen={() => setIsOpen2(!isOpen2)}
            value={currentValue}
            setValue={(val) => setCurrentValue(val)}
            maxHeight={150}
            labelProps={destinos}
            placeholder="Seleccione Pasajeros"
            placeholderStyle={{
              color: "#000000",
              fontWeight: "400",
              fontSize: 20,
            }}
          />
          <Text style={styles.LabelsForms}>Pasajeros</Text>
          <TextInput
            placeholder="Escriba el nombre de los pasajeros"
            style={[styles.LabelsForms, styles.txtStyle]}
          ></TextInput>
          <Text style={styles.LabelsForms}>Gasto Por Pasajero</Text>
          <TextInput
            placeholder="$"
            style={[styles.LabelsForms, styles.txtStyle]}
          ></TextInput>
        </View>
        <View style={styles.viewbutton2}>
          <Text style={styles.txtbtn}>Añadir Gasto</Text>
          <Button
            containerStyle={styles.buttons}
            buttonStyle={styles.buttonx}
          ></Button>
        </View>
      </View>
    </>
  );
};
const styless = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:50
    },
    backButton:{
        marginTop: 36,
        marginRight: 50
    }
})

export default AgregarGastos;
