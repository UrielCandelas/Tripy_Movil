import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking} from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

export default function Reseñas({onPress}) {
    return (
        <View>


                <View style={styles.review}>
                <View style={styles.container1}>
                    <View style={styles.leftContent}>
                        <Image source={require('../images/Default_pfp.png')} style={styles.roundImage}/>
                        <Text style={styles.texto1} onPress={onPress}>Usuario</Text>
                    </View>
                    <Text style={styles.texto3}>4.5 <Ionicons name="star" size={15} color="#FF981F" /></Text>
                </View>
                    <Text style={styles.texto2}>Fecha</Text>
                    <Text style={styles.texto3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...</Text>
                </View>


                <View style={styles.review}>
                <View style={styles.container1}>
                    <View style={styles.leftContent}>
                        <Image source={require('../images/Default_pfp.png')} style={styles.roundImage}/>
                        <Text style={styles.texto1} onPress={onPress}>Usuario</Text>
                    </View>
                    <Text style={styles.texto3}>4.5 <Ionicons name="star" size={15} color="#FF981F" /></Text>
                </View>
                    <Text style={styles.texto2}>Fecha</Text>
                    <Text style={styles.texto3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...</Text>
                </View>


                <View style={styles.review}>
                <View style={styles.container1}>
                    <View style={styles.leftContent}>
                        <Image source={require('../images/Default_pfp.png')} style={styles.roundImage}/>
                        <Text style={styles.texto1} onPress={onPress}>Usuario</Text>
                    </View>
                    <Text style={styles.texto3}>4.5 <Ionicons name="star" size={15} color="#FF981F" /></Text>
                </View>
                    <Text style={styles.texto2}>Fecha</Text>
                    <Text style={styles.texto3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...</Text>
                </View>




        </View>
    )
}


const styles = StyleSheet.create({

    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '5%',
    },

    container2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    leftContent: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginRight: 20,
    
    },

    review: {
        width: '90%',
        height: 150,
        flex: 1,
        alignSelf: 'center',
    
    },

    texto1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        top: 0,
        left: 0,
        marginLeft: 10,
    
    },

    texto2: {
        fontSize: 12,
        color: '#8F959E',
        top: 0,
        left: 0,
        paddingTop: '3%',
    
    },

    texto3: {
        fontSize: 15,
        color: '#8F959E',
        top: 0,
        left: 0,
        paddingTop: '4%',
        paddingRight: 10,
    
    },

    roundImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignSelf: 'center',
    
    },


})

