import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,

} from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../Components/Title";
import Card from "../Components/Card";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { height, width } = useWindowDimensions();

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const inputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmHandler = () => {
    console.log(enteredNumber);
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "The number can be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };



  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} >
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          {/* <Text style={styles.textContainer}>Guess my number</Text> */}
          <Title>Guess my number</Title>
          <View style={styles.inputContainer}>
            <Text style={styles.text2Container}>Enter a number</Text>
            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={inputHandler}
            />
            {/* Add Buttons here */}
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  inputContainer: {
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
  textInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    color: Colors.accent500,
    marginVertical: 8,
    borderBottomWidth: 5,
    borderBottomColor: Colors.accent500,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  textContainer: {
    fontSize: 20,
    color: "white",
    borderWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: "white",
  },
  text2Container: {
    fontSize: 20,
    color: "orange",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
