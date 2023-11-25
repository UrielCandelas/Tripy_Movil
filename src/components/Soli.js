import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    } from "react-native";
    import React from "react";
    import { Ionicons } from "@expo/vector-icons";

    export default function Soli({ onPress,location,date,user,onPressAccept,onPressReject }) {
    return (
        <View style={styles.container1}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>

                <View>
                <Text style={styles.texto2c}>{user}</Text>
                <Text style={styles.texto1c}>{location + ' ' + date}</Text>
                </View>

                <View style={styles.iconContainer}>
                <Ionicons
                style={styles.back}
                name="checkmark-circle"
                size={30}
                opacity={0.7}
                color="#176B87"
                onPress={onPressAccept}
                />
                <Ionicons
                style={styles.back}
                name="close-circle"
                opacity={0.7}
                size={30}
                color="#176B87"
                />
                </View>
                
            </View>
            </TouchableOpacity>
        </View>
    );
    }
    
    const styles = StyleSheet.create({

    container1: {
        paddingBottom:15, 
    },

    soli: {
        width: 230,
        height: 160,
        borderRadius: 10,
        padding: 16,
        marginLeft: 16,
    },
    
    texto1c: {
        fontSize: 15,
        color: "#8F959E",
        top: 0,
        left: 0,
        paddingBottom: 6,
        paddingLeft: 16,
        marginRight: -100,
    },

    texto2c: {
        fontSize: 17,
        color: "black",
        fontWeight: "bold",
        top: 0,
        left: 0,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 16,
    },

    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        paddingLeft: 150,
        paddingHorizontal:16, 
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingHorizontal:16, 
    },
    });
    