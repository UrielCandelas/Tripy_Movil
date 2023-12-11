import React, { useState, useEffect, useRef } from "react";
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
import { io } from "socket.io-client";
import { useTranslation } from "react-i18next";

export default function Chat() {
  const navigation = useNavigation();
  const route = useRoute();
  const { currentChat } = route.params;
  const [message, setMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [messageText, setMessageText] = useState("");
  const { user, registerNewMessage, getMessages, messages, setMessages } =
    useAuth();

  const socket = useRef();
  const host = "http://192.168.0.10:3000";

  const scrollViewRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  useEffect(() => {
    if (user) {
      socket.current = io(host);
      socket.current.emit("add-user", user.id);
    }
  }, [user]);

  useEffect(() => {
    const data = {
      id_user1: user.id,
      id_user2: currentChat.id,
    };
    getMessages(data);
  }, [currentChat]);

  const handleSendMsg = async () => {
    const data = {
      id_user1: user.id,
      id_user2: currentChat.id,
      message: message,
    };
    if (data.message === "" || data.message === null || data.message === " ") {
      return;
    }
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
    scrollToBottom();
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
        scrollToBottom();
      });
    }
  }, []);
  
  useEffect(() => {
    scrollToBottom();
  },[])

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    scrollToBottom();
  }, [arrivalMessage]);
const {t, i18next} = useTranslation();
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
          text={currentChat.name}
          marginTop={60}
          marginLeft={5}
          marginRight={"28%"}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
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
          text={currentChat.name}
          marginTop={0}
          marginBottom={20}
        />
        {messages?.map((message, i) => (
          <Messages
            user={message.fromSelf === true ? user.name : currentChat.name}
            Txt={message.message}
            date="10:00 p.m."
            align={message.fromSelf === true ? "flex-end" : "flex-start"}
            backgroundColor={message.fromSelf === true ? "#001C30" : "#F2F2F2"}
            textcolor={message.fromSelf === true ? "#fff" : "#000"}
            key={i}
          />
        ))}
      </ScrollView>
      <View style={styles.messagecontainer}>
        <InputChat
          placeholder={t("PlaceHolderChat")}
          onChangeText={setMessage}
          value={message}
        />
        <SendButton filcolor="#FEFEFE" onPresshandler={handleSendMsg} />
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
    marginTop: 20,
  },
});
