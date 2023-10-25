import { StyleSheet, Text } from "react-native";
import React from "react";

export default function GeneralText({
  text,
  size,
  color,
  height,
  width_,
  height_,
  padding_,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  fontWeight,
  onPress
}) {
  const styles = StyleSheet.create({
    text: {
      color: color,
      fontSize: size,
      lineHeight: height,
      width: width_,
      height: height_,
      padding: padding_,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      paddingBottom: paddingBottom,
      paddingTop: paddingTop,
      marginTop: marginTop,
      marginRight: marginRight,
      marginLeft: marginLeft,
      marginBottom: marginBottom,
      fontWeight: fontWeight,
    },
  });
  return <Text style={styles.text} onPress={onPress}>{text}</Text>;
}
