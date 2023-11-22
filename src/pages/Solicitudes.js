import React,{useEffect,useState} from "react";
import { Text, View, ScrollView, StyleSheet, SafeAreaView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import Soli from "../components/Soli";
import io from "socket.io-client";
import { useTravels } from "../context/TravelsContext";
import { useLocations } from "../context/LocationContext";

const Solicitudes = () => {
  const [response,setResponse] = useState([])
  const navigation = useNavigation();
  const {user,getUserRequest, usersByRequest} = useAuth();
  const {getSomeTravel} = useTravels();
  const {getLocationByTravelID,locationByTravel} = useLocations();
  const socket = io.connect("http://192.168.168.248:3000",{query:{id_user1: user  ? user.id : 0}});

  useEffect(() => {
    socket.on("send_request", (data) => {
      setResponse(data)
      for (let index = 0; index < response.length; index++) {
        getLocationByTravelID(response[index].id_travel)
        console.log(locationByTravel)
      }
    })
  },[])
  useEffect(() => {
    getUserRequest(user.id);
  },[])
  return (
    <View style={styles.crearViaje}>
      <StatusBar style="auto" />
        <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={()=> navigation.goBack()}
        />
        
        <Text style={styles.texto1}>Solicitudes</Text>
      
        <SafeAreaView>
            <ScrollView>
              {response.map((soli,i)=>{
                return(
                  <Soli
                  key={i}
                  onPress={() => navigation.navigate("LandPage")}
                  location={soli.location}
                  date={soli.date}
                  user={soli.user}
                  />
                )
              })}
            </ScrollView>
        </SafeAreaView>

    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 50,
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
});

export default Solicitudes;
