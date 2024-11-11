import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../Components/Title";
import NumberContainer from "../Components/NumberContainer";
import PrimaryButton from "../Components/PrimaryButton";
import Card from "../Components/Card";
import Colors from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../Components/GuessLogItem";

const generateRandomNumber = (min, max, exclude) => {
  const numberGenerated = Math.floor(Math.random() * (max - min)) + min;
  if (numberGenerated === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return numberGenerated;
  }
};
let minBoundary = 1;
let maxBoundry = 100;

const GameScreen = ({ userNumber, handleGameOver }) => {
  const { width } = useWindowDimensions();
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const onPressHandler = (string) => {
    if (
      (string === "lower" && userNumber > currentGuess) ||
      (string === "higher" && userNumber < currentGuess)
    ) {
      Alert.alert("Don't lie!!!", "You know this is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    console.log(string);
    if (string === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    const newNumber = generateRandomNumber(
      minBoundary,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newNumber);
    setGuessRounds((prevRounds) => [newNumber, ...prevRounds]);
  };

  useEffect(() => {
    if (userNumber === currentGuess) {
      handleGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, handleGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundry = 100;
  }, []);

  const getRounds = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Higher or lower? </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => onPressHandler("higher")}>
              <Ionicons name="arrow-up" size={24} color={"orange"} />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={() => onPressHandler("lower")}>
              <Ionicons name="arrow-down" size={24} color={"orange"} />
            </PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View style={styles.wideContainer}>
        <View style={styles.button}>
            <PrimaryButton onPress={() => onPressHandler("higher")}>
              <Ionicons name="arrow-up" size={24} color={"orange"} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.button}>
            <PrimaryButton onPress={() => onPressHandler("lower")}>
              <Ionicons name="arrow-down" size={24} color={"orange"} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>

      {content}
      <View>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              guessedNumber={itemData.item}
              roundNumber={getRounds - itemData.index}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  inputContainer: {
    gap: 10,
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
  text: {
    color: "white",
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  wideContainer:{
    flexDirection:"row",
    alignItems:"center",
    
  }
});
