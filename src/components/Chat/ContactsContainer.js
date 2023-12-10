import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Container from "../Contactos/Container";
import { useNavigation } from "@react-navigation/native";

export default function ContactsContainer({ contacts, socket }) {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {contacts?.map((contact, i) => (
          <Container
            text={contact.name}
            key={i}
            onPresshandler={() => {
              navigation.navigate("Chat", {
                currentChat: contact,
                //socket,
              });
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#FEFEFE",
    alignItems: "center",
    paddingTop: 120,
  },
});
