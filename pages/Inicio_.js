import * as React from "react";
import { ScrollView, Text, View, Image, ImageBackground } from "react-native";
import { Button as RNPButton, TextInput } from "react-native-paper";
import { Button } from "@rneui/themed";
import { styles } from "../styles/Styles_Inicio";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';


const Inicio = () => {
  return (
    
    <View style={styles.inicio}>
      <Button
        containerStyle={styles.btnDrawerIconBtn}
        buttonStyle={styles.btnDrawerIconBtn1}>
            <AntDesignIcon name="menufold" size={27}/>
        </Button>
        <Text style={[styles.bienvenidoATripy, styles.txt_1]}>
        Bienvenido a Tripy
      </Text>  
      <TextInput
        style={[styles.txtDestinoBuscar, styles.txtPosition]}
        placeholder="Ingrese Destinos"
      />
      <Text style={[styles.escojeUnDestino, styles.txt_1]}>
        Escoje un destino
      </Text>
        <View
        style={[styles.groupParent, styles.groupParentPosition]}
      >
      <ScrollView> 
        <View style={styles.cardrow}>
            <View style={styles.LeftCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
            <View style={styles.RightCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
        </View>
        <View style={styles.cardrow}>
            <View style={styles.LeftCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
            <View style={styles.RightCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
        </View> 
        <View style={styles.cardrow}>
            <View style={styles.LeftCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
            <View style={styles.RightCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
        </View> 
        <View style={styles.cardrow}>
            <View style={styles.LeftCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
            <View style={styles.RightCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
        </View>
        <View style={styles.cardrow}>
            <View style={styles.LeftCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
            <View style={styles.RightCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
        </View>
        <View style={styles.cardrow}>
            <View style={styles.LeftCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
            <View style={styles.RightCard}>
                <RNPButton
                mode="outlined"
                contentStyle={styles.rectangleButtonBtn}
                />
                <Text style={styles.destinoTypo}>Destino</Text>
            </View>
        </View>
      </ScrollView>     
      </View>
    </View>
  );
};


export default Inicio;
