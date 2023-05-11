import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Game = ({ onPlayerChoose, choices }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elige Una Opción: </Text>
      <View style={styles.choices}>
        {choices.map((choice) => (
          <TouchableOpacity
            key={choice}
            style={styles.choiceButton}
            onPress={() => onPlayerChoose(choice)}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Game;
