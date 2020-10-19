import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Colors from "../constants/colors";


const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      {/* ...เพิ่มโค้ด สรุปผลลัพธ์การเล่นเกม และมีปุ่มให้เริ่มเกมใหม่ได้... */}
      <Text>Number of rounds: {props.guessRounds}</Text>
      <Text> Correct Number was: {props.correctNumber}</Text>
      <Button
        title="New Game"
        color={Colors.accent}
        onPress = {() => props.configureNewGameHandler()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default GameOverScreen;