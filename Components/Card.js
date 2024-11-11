import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children} </View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary500,
    marginTop: 100,
    padding: 16,
    marginHorizontal: 10,
    borderRadius: 8,
    elevation: 200,
    shadowColor: "black",
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});
