import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textContainer: {
    color: Colors.accent500,
    fontSize: 30,
  },
});
