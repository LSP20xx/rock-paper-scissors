import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const StartGame = ({ onStartGame }) => {
  const onHandlerStartGame = () => {
    onStartGame("game");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piedra, Papel o Tijera</Text>
      <TouchableOpacity style={styles.button} onPress={onHandlerStartGame}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartGame;
