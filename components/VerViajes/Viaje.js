import { TouchableOpacity,StyleSheet,Image } from "react-native";

import GeneralText from "../GeneralText";
import React from "react";


export default function Viaje() {
  const longText = "Gastos a compartir \n Fecha del viaje\nGastos hasta el momento: $";
  return (
    <TouchableOpacity style={styles.view}>
      <GeneralText
        text={"Gastos a compartir"}
      color="#fff" size={12} width_={268} paddingLeft= {20} paddingRight={20} paddingTop={20}/>
      <Image source={require('../../images/userIcon.png')} style={styles.image}/>
      <GeneralText
        text={"Fecha del viaje"}
      color="#fff" size={12} width_={268} paddingLeft={20} paddingRight={20} paddingBottom={20}marginTop={-15}/>
      <GeneralText
        text={"Gastos hasta el Momento: $"}
      color="#fff" size={12} width_={268} padding_= {20} marginTop={-40}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view:{
    backgroundColor: "#001C30",
    borderRadius: 10,
    height: 'auto',
    width: 334,
    flexShrink: 0,
    paddingLeft:30,
    marginBottom: 20,
  },
  image:{
    width: 12,
    height: 12,
    marginLeft: 20,
    marginTop:5,
    marginBottom: 20
  }
})
