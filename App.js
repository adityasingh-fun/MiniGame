import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./Screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const startNewGame = () => {
    setRounds(0);
    setUserNumber(null);
  };

  const handleGameOver = (numberOfRounds) => {
    setIsGameOver(true);
    setRounds(numberOfRounds);
  };

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
    console.log("Number picked from start screen", userNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} handleGameOver={handleGameOver} />
    );
  }
  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={rounds}
        startNewGame={startNewGame}
      />
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#b00b5d", "orange"]} style={styles.container}>
        <ImageBackground
          source={require("./assets/images/backgroundImage.jpg")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
