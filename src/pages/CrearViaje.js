import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import DateTimePicker from "@react-native-community/datetimepicker";
import GeneralButton from "../components/GeneralComponents/GeneralButton";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useLocations } from "../context/LocationContext";
import { useTravels } from "../context/TravelsContext";
import { useAuth } from "../context/AuthContext";

export default function () {
  const navigation = useNavigation();
  const { locations, getLocations } = useLocations();
  const { user } = useAuth();
  const { registerNewTravelFunc, transports, getTransports } = useTravels();

  const id_user1 = user.id;
  useEffect(() => {
    getLocations();
    getTransports();
  }, []);

  let data = [];
  locations.map((location, i) => {
    data.push({ label: location.location_name, value: location.id });
  });
  let data2 = [];
  transports.map((transports, i) => {
    data2.push({ label: transports.transport, value: transports.id });
  });

  const handleTextChange = (text, state) => {
    const formattedText = text.replace(/[ ,\-\.]/g, "");
    state(formattedText);
  };
  const [value, setValue] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [companions, setCompanions] = useState("");
  const [extra, setExtra] = useState("");
  const [travel_date, setTravel_date] = useState(new Date());
  const [typeOfExpenses, setTypeOfExpenses] = useState("");
  const [typeTransportation, setTypeTransportation] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = async () => {
    try {
      const newTravel = {
        id_user1,
        id_location: value.value,
        travel_date,
        id_transportation: typeTransportation ? typeTransportation.value: 5,
        expense: typeOfExpenses,
        quantity: parseInt(quantity),
        extra,
        companions: parseInt(companions),
      };
      //console.log(newTravel)
      const res = await registerNewTravelFunc(newTravel);
      Alert.alert("Viaje creado");
      navigation.navigate("LandPage");
    } catch (error) {
      Alert.alert("Ha ocurrido un error: " + error);
      console.log(error);
    }
  };

  const calculateMaxDate = () => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    return maxDate;
  };
  const onChangeDate = (selectedDate) => {
    const currentDate = selectedDate.nativeEvent.timestamp
      ? new Date(selectedDate.nativeEvent.timestamp)
      : new Date();
    setShowDatePicker(Platform.OS === "ios");
    setTravel_date(currentDate);
    console.log(travel_date);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#64CCC5"/>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.texto1}>Crear viaje</Text>

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
                onChange={setValue}
              />
            </SafeAreaView>
          </View>

          <View style={styles.container1}>
            <Text style={styles.texto5}>Costo total aproximado</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                value={quantity}
                onChangeText={(text) => handleTextChange(text, setQuantity)}
                keyboardType="numeric"
                maxLength={6}
              />
            </SafeAreaView>
          </View>

          <View style={styles.container1}>
            <Text style={styles.texto5}>Fecha del inicio del viaje</Text>
            <SafeAreaView>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
              style={{marginLeft: 20}}
                  name="calendar-sharp"
                  size={24}
                  color="black"
                  onPress={() => setShowDatePicker(true)}
                />
                <GeneralButton
                  text={travel_date.toLocaleDateString()}
                  onPressHandler={() => setShowDatePicker(true)}
                  width={100}
                  height={40}
                  padding={5}
                />
              </View>

              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={travel_date}
                  mode="date"
                  is24Hour={true}
                  display="spinner"
                  onChange={onChangeDate}
                  minimumDate={new Date()}
                  maximumDate={new Date().setFullYear(
                    new Date().getFullYear() + 1
                  )}
                />
              )}
            </SafeAreaView>
          </View>

          <View style={styles.container1}>
            <Text style={styles.texto5}>Gastos a compartir</Text>

            <View style={styles.radioButtonContainer}>
              <RadioButton.Group
                onValueChange={setTypeOfExpenses}
                value={typeOfExpenses}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton value="Transporte" color="#001C30" />
                  <Text>Transporte</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton value="Estancia" color="#001C30" />
                  <Text>Estancia</Text>
                </View>
              </RadioButton.Group>
              {typeOfExpenses === "Transporte" ? (
                <View>
                  <Dropdown
                    style={[styles.dropdown, { minWidth: 240 }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={data2}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Selecciona un transporte"
                    searchPlaceholder="Buscar"
                    value={typeTransportation}
                    onChange={setTypeTransportation}
                  />
                </View>
              ) : (
                <></>
              )}
            </View>
          </View>
          <View style={styles.container1}>
            <Text style={styles.texto5}>
              Número de usuarios que se pueden unir al viaje
            </Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={companions}
                onChangeText={(text) => handleTextChange(text, setCompanions)}
                maxLength={1}
              />
            </SafeAreaView>
          </View>

          <View style={styles.container1}>
            <Text style={styles.texto5}>Requisitos extra</Text>
            <TextInput
              style={styles.input1}
              value={extra}
              onChangeText={setExtra}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#64CCC5",
            width: "100%",
            justifyContent: "center",
            height: 75,
            marginTop: 40,
            position: "relative",
            bottom: 0,
            alignItems: "center",
          }}
          onPress={handleSubmit}
        >
          <Text style={styles.texto6}>Crear viaje</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container1: {
    paddingTop: "2%",
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
    fontWeight: "bold",
    fontSize: 17,
  },

  dropdown: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    borderColor: "#8F959E",
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: "#8F959E",
  },

  placeholderStyle: {
    fontSize: 16,
    color: "#8F959E",
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
    position: "relative",
  },

  input: {
    marginLeft: 16,
    height: 50,
    borderColor: "#8F959E",
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: "#8F959E",
    fontSize: 16,
    width: 200,
  },

  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16, // Padding específico para los radio buttons
  },

  input1: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    borderColor: "#8F959E",
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: "#8F959E",
    fontSize: 16,
    height: 107,
  },
});