import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  

    groupParentPosition: {
      top: 250,
      left: 20,
      right: 20,
      width: "90%",
    },

    rectangleButtonBtn: {
      height: 210,
      width: 170,
    },

    destinoTypo: {
      lineHeight: 15,
      fontSize: 16,
      textAlign: "left",
      color: "#000000",
      fontWeight: "500",
      marginTop: 6,

    },

    cardrow: {
      flexDirection: "row",
    },
    
    LeftCard: {
      marginTop: 14,
      alignSelf: 'baseline',
      backgroundColor: "#ffffff",
    },

    RightCard: {
      marginTop: 14,
      alignSelf: 'baseline',
      backgroundColor: "#ffffff",
      marginLeft: 8,
    },        
      
    btnDrawerIconBtn: {
      left: 20,
      top: 45,
      position: "absolute",
    },
    btnDrawerIconBtn1: {
      borderRadius: 180,
      backgroundColor: "#ffffff",
      width: 40,
      height: 40,
    },

    txtDestinoBuscar: {
      top: 150,
      right: 20,
      borderColor: "#000000",
      borderWidth: 1,
      backgroundColor: "#E0E0E0",
      height: 41,
    },

    txtPosition: {
        left: 24,
        position: "absolute",
      },

    escojeUnDestino: {
      top: 225,
      fontSize: 17,
      fontWeight: "500",
      textAlign: "left",
      color: "#000000",
    },
    bienvenidoATripy: {
      top: 100,
      fontSize: 30,
      lineHeight: 30,
      width: 260,
      height: 30,
    },

    txt_1: {
        textAlign: "left",
        color: "#000000",
        left: 24,
        position: "absolute",
      },

    inicio: {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      flex: 1,
    },
    
  });
  

export { styles }