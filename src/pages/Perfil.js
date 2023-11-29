import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Cards from "../components/Cards";
import Reseñas from "../components/Reseñas";
import { useNavigation } from "@react-navigation/native";
import { useTravels } from "../context/TravelsContext";
import { useAuth } from "../context/AuthContext";
import { useRoute } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id,name } = route.params;
  const { getComentaries, commentaries } = useAuth();
  const { getTravelsInactive, travelsInactive } = useTravels();

  useEffect(() => {
    getComentaries(id);
    getTravelsInactive(id);
  }, []);

  const users = commentaries.users;
  const comentaries = commentaries.commentaries;

  const travels = travelsInactive.travels;
  const expenses = travelsInactive.expenses;
  const locations = travelsInactive.locations;
  const extras = travelsInactive.extras;
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />

        <Text style={styles.texto1}>{name}</Text>

        <Image
          source={require("../images/Default_pfp.png")}
          style={styles.roundImage}
        />

        <View style={styles.container1}>
          <Text style={styles.texto3}>Viajes</Text>
          <Text
            style={styles.texto4}
            onPress={() =>
              navigation.navigate("VerViajes2", {
                name: users[0].name,
                travels: travels,
                expenses: expenses,
                locations: locations,
                extras: extras,
              })
            }
          >
            Ver todo
          </Text>
        </View>

        <SafeAreaView style={styles.containercards}>
          <ScrollView horizontal>
            {travels?.map((travel, i) => {
              if (i < 5) {
                return (
                  <Cards
                    date={travel.travel_date}
                    expense={expenses[i].quantity}
                    location={locations[i].location_name}
                    key={i}
                    companions={travel.companions}
                    onPress={() =>
                      navigation.navigate("VerViajesExis", {
                        location: locations[i].location_name,
                        companions: travel.companions,
                        expenses: expenses[i].quantity,
                        expenses_name: expenses[i].expense,
                        extras: extras[i]
                          ? extras[i].extra_commentary
                          : "Sin extras",
                        isActive: travel.isActive,
                      })
                    }
                  />
                );
              }
            })}
          </ScrollView>
        </SafeAreaView>

        <View style={{ paddingTop: 15 }}>
          <View style={styles.container1}>
            <Text style={styles.texto3}>Reseñas</Text>
            <View style={{ paddingRight: 16 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#DAFFFB",
                  height: 40,
                  borderRadius: 10,
                  width: 125,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => navigation.navigate("AñadirReseña")}
              >
                <Text style={styles.texto5}>Agregar reseña</Text>
              </TouchableOpacity>
            </View>
          </View>

          <SafeAreaView style={styles.containerreviews}>
            <ScrollView>
            {comentaries?.map((comentary, i) => (
              <Reseñas
                onPress={() => navigation.navigate("PerfilUsuario",{
                    name: users[i].name,
                    id: users[i].id
                })}
                comentary={comentary.commentary_text}
                date={comentary.createdAt}
                rate={comentary.rate}
                user={users[i].userName}
              />
            ))}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "5%",
  },

  containercards: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "5%",
  },

  containerreviews: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "5%",
  },

  text: {
    fontSize: 20,
    margin: 20,
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

  texto2: {
    color: "#8F959E",
    fontSize: 15,
    alignSelf: "center",
    top: 0,
    left: 0,
    padding: 16,
  },

  texto3: {
    fontSize: 17,
    fontWeight: "bold",
    top: 0,
    left: 0,
    padding: 16,
  },

  texto4: {
    fontSize: 15,
    color: "#8F959E",
    top: 0,
    right: 0,
    padding: 16,
  },

  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
});
