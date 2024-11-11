import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";


const PrimaryButton = ({ children,onPress }) => {
  const handlePress = () => {
    console.log("Button Pressed");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={() => onPress()}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children} </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 25,
    overflow: "hidden",
    
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary700,

    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
