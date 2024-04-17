/* import React, { useState,useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Image } from "react-native-svg";
import GeneralText from "../components/GeneralComponents/GeneralText";
import Viaje from "../components/VerViajes/Viaje";
import Arrowback from "../components/VerViajes/Arrowback";
import ProfilePhoto from "../components/Chat/ProfilePhoto";
import Messages from "../components/Chat/Messages";
import InputChat from "../components/Chat/InputChat";
import SendButton from "../components/Chat/SendButton";

import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useTravels } from "../context/TravelsContext";
import { useAuth } from "../context/AuthContext";
import ChatContainer from "../components/Chat/ChatContainer";

export default function Chat() {
  const navigation = useNavigation();
  const route = useRoute();
  const { currentChat,socket } = route.params;
  const [message, setMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [messageText, setMessageText] = useState("");
  const { user, registerNewMessage, getMessages, messages, setMessages } =
    useAuth();

  useEffect(() => {
    const data = {
      id_user1: user.id,
      id_user2: currentChat.id,
    };
    getMessages(data);
  }, [currentChat]);

  const handleSendMsg = async (event) => {
    event.preventDefault();
    const data = {
      id_user1: user.id,
      id_user2: currentChat.id,
      message: message,
    };
    registerNewMessage(data);

    socket.current.emit("send-msg", {
      to: currentChat.id,
      from: user.id,
      message,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: message });
    setMessages(msgs);
    setMessage("");
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);
  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);
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
          text={"nombre"}
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
          text={"Viaje"}
          marginTop={0}
          marginBottom={20}
        />
        <ScrollView contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
          {messages?.map((message, i) => (
          <Messages
            user={message.fromSelf === true ? user.name : currentChat.name}
            Txt={message.message}
            date="10:00 p.m."
            align={message.fromSelf === true ? "flex-end" : "flex-start"}
            backgroundColor={message.fromSelf === true ? "#FEFEFE" : "#F2F2F2"}
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
        <SendButton filcolor="#FEFEFE" onPresshandler={handleSendMsg}/>
      </View>
      </ScrollView>
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
}); */
