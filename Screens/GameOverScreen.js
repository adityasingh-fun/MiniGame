import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import Colors from "../constants/Colors";

const GameOverScreen = ({ userNumber, rounds, startNewGame }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (height < 400) {
    imageSize = 150;
  }
  const imageStyle = {
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize/2
  }
  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer,imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.jpg")}
          />
        </View>
        <Text style={styles.text}>
          Your phone needed{" "}
          <Text style={styles.highlightedText}>{rounds} </Text> rounds to guess
          the number <Text style={styles.highlightedText}>{userNumber} </Text>
        </Text>
        <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 40,
  },
  imageContainer: {
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 200,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 19,
  },
  highlightedText: {
    color: Colors.primary600,
    fontWeight: "bold",
  },
});
