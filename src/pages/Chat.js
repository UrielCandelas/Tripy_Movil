import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Image } from "react-native-svg";
import GeneralText from "../components/GeneralComponents/GeneralText";
import Viaje from "../components/VerViajes/Viaje";
import Arrowback from "../components/VerViajes/Arrowback";
import InputChat from "../components/Chat/InputChat";
import ProfilePhoto from "../components/Chat/ProfilePhoto";
import Messages from "../components/Chat/Messages";
import SendButton from "../components/Chat/SendButton";

import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useTravels } from "../context/TravelsContext";
import { useAuth } from "../context/AuthContext";

export default function Chat() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, id, room } = route.params;
  const { sendMessage, messages, message } = useTravels();
  const { user } = useAuth();
  const [messageText, setMessageText] = useState("");

  //console.log(messages)
  const onSubmit = () => {
    const data = {
      message: messageText,
      room: room,
    };
    sendMessage(data);
    setMessageText("");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FEFEFE" }}>
      <View style={styles.header}>
        <Arrowback
          style={styles.arrow}
          color={"transparent"}
          onPresshandler={() => navigation.goBack()}
        />
        <Circle cx="100" cy="100" r="70" fill="red" />
        <ProfilePhoto color="#FEFEFE" />
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text={name}
          marginTop={60}
          marginLeft={5}
          marginRight={"28%"}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Svg height="200" width="200">
          <Circle cx="100" cy="100" r="70" fill="#F2F2F2" />
          <Image
            x="40"
            y="40"
            width="120"
            height="120"
            href={require("../images/Default_pfp.png")}
          />
        </Svg>
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text={name}
          marginTop={0}
          marginBottom={20}
        />
        {messages?.map((message, i) => (
          <Messages
            user={"asas"}
            Txt={"asasas"}
            date="10:00 p.m."
            align={"flex-end"}
            backgroundColor={"#F2F2F2"}
            textcolor={"#000"}
            key={i}
          />
        ))}
      </ScrollView>
      <View style={styles.messagecontainer}>
        <InputChat
          placeholder={"Escribe un mensaje..."}
          onChangeText={setMessageText}
          value={messageText}
        />
        <SendButton filcolor="#FEFEFE" onPresshandler={onSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFEFE",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#64CCC5",
    zIndex: 1000,
    position: "absolute",
    top: 0,
  },
  arrow: {
    marginTop: 60,
    marginLeft: 10,
  },
  scrollContainer: {
    backgroundColor: "#FEFEFE",
    alignItems: "center",
    paddingTop: 120,
  },
  messagecontainer: {
    backgroundColor: "transparent",
    borderTopWidth: 2,
    borderTopColor: "#E8E8E8",
    display: "flex",
    flexDirection: "row",
  },
});
