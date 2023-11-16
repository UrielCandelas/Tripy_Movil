import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button, TouchableOpacity, TextInput} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from 'react-native-paper';


const data = [
  { label: 'Destino 1', value: '1' },
  { label: 'Destino 2', value: '2' },
  { label: 'Destino 3', value: '3' },

];

export default function({navigation}) {


    const [value, setValue] = useState(null)
    const [selectedValue, setSelectedValue] = useState('option1');



    
  return (

      <View style={styles.container}>
        <StatusBar style="auto" />
        <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={()=> navigation.goBack()}
        />
        
        <Text style={styles.texto1}>Crear viaje</Text>
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View>

        <View style={styles.container1}>
        <Text style={styles.texto5}>Destino</Text>
        <SafeAreaView>
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Selecciona un destino"
        searchPlaceholder="Buscar"
        value={value}
        onChange={item => {
        setValue(item.value);
        }}
        />
        </SafeAreaView>
        </View>

        <View style={styles.container1}>
        <Text style={styles.texto5}>Costo total aproximado</Text>
        <SafeAreaView>
        <TextInput style={styles.input}
        />
        </SafeAreaView>
        </View>

        <View style={styles.container1}>
        <Text style={styles.texto5}>Gastos a compartir</Text>

        <View style={styles.radioButtonContainer}>
        <RadioButton.Group
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="option1" color="#001C30"/>
            <Text>Transporte</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="option2" color="#001C30"/>
            <Text>Estancia</Text>
          </View>
        </RadioButton.Group>
        </View>

        </View>

        <View style={styles.container1}>
        <Text style={styles.texto5}>Número de usuarios que se pueden unir al viaje</Text>
        <SafeAreaView>
        <TextInput style={styles.input} 
        />
        </SafeAreaView>

        </View>

        <View style={styles.container1}>
        <Text style={styles.texto5}>Requisitos extra</Text>
        <TextInput style={styles.input1} 
        />
        </View>

        </View>
        </ScrollView>


        <TouchableOpacity style={{
          backgroundColor: '#64CCC5',
          width: '100%',
          justifyContent: 'center',
          height: 75,
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
        }} onPress={()=>navigation.goBack()}>
        <Text style={styles.texto6}>Crear viaje</Text>
      </TouchableOpacity>

        </View>
        

      

    
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container1:{
    paddingTop: '2%',
  },

  back: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 16,
    paddingTop: "15%",
  },

  texto1: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    top: 0,
    left: 0,
    padding: 16,
    paddingTop: "20%",
  },

  texto5: {
    fontSize: 17,
    top: 0,
    left: 0,
    padding: 16,
  },

  texto6: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 17,
  },

  dropdown: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    borderColor: '#8F959E',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: '#8F959E',
  },

  placeholderStyle: {
    fontSize: 16,
    color: '#8F959E',
  },

  selectedTextStyle: {
    fontSize: 16,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 10,
  },

  input: {
    marginLeft: 16,
    height: 50,
    borderColor: '#8F959E',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: '#8F959E',
    fontSize: 16,
    width: 200,
  },

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16, // Padding específico para los radio buttons
  },

  input1: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    borderColor: '#8F959E',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: '#8F959E',
    fontSize: 16,
    height: 107,
  },



});
