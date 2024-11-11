import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

const Title = ({ children }) => {
  return <Text style={styles.container}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal:20,
    width:400,
    maxWidth:"80%"
  },
});
