import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const GuessLogItem = ({ roundNumber, guessedNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}># {roundNumber} </Text>
      <Text style={styles.text} >Opponent's Guess: {guessedNumber}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    width:350,
    maxWidth:"100%",
    borderWidth: 1,
    borderColor: Colors.primary600,
    backgroundColor: Colors.accent500,
    borderRadius: 40,
    padding: 10,
    marginVertical: 5,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
  },
});
