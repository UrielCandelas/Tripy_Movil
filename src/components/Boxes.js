import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import GeneralLittleTxt from './GeneralComponents/GeneralLittleTxt';
import { useNavigation } from "@react-navigation/native";
import { useLocations } from "../context/LocationContext";
import { useEffect } from "react";

export default function Boxes({ Txt,onPress }) {
  const navigation = useNavigation();
  const { locations, getLocations } = useLocations();
  useEffect(() => {
    getLocations();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.inner}>
          <Text style={styles.text}>{Txt}</Text>
        </View>
        </TouchableOpacity>
        <GeneralLittleTxt Txt="Destino"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '46%',
    justifyContent: 'space-between', // Distribuye las cajas uniformemente en la fila
    padding: 1,
    marginLeft: 10,
  },
  box: {
    display: 'flex',
    width: '100%', // Ancho ajustado para acomodar dos cajas en una fila
    marginBottom: 10, // Espacio entre las filas
  },
  inner: {
    flex: 1,
    backgroundColor: '#E7E8EA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 250, 
  },
  text: {
    color: 'black',
  },
});

/*
ESTE ES EL ANTIGUO CODIGO DE BOXES CON LOCATIONS
<View style={styles.container}>
      {locations.map((location, i) => (
        <View style={styles.box} key={i}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Destino", {id: location.id});
            }}
          >
            <View style={styles.inner}>
              <Text style={styles.text}>{location.location_name}</Text>
            </View>
          </TouchableOpacity>
          <GeneralLittleTxt Txt={location.location_name} />
        </View>
      ))}
    </View>
  );
}

*/