import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const GameOver = ({
  gameState,
  playerChoice,
  computerChoice,
  onRestartGame,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {gameState === "win"
        ? "¡Ganaste! 🎉 "
        : gameState === "lose"
        ? "¡Perdiste! 😓 "
        : "¡Empate! 🤝"}
    </Text>
    <Text style={styles.subTitle}>
      Tú elegiste {playerChoice} y la computadora eligió {computerChoice}.
    </Text>
    <TouchableOpacity style={styles.button} onPress={onRestartGame}>
      <Text style={styles.buttonText}>Nuevo Juego</Text>
    </TouchableOpacity>
  </View>
);

export default GameOver;
