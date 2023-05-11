import React, { useState } from "react";
import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";
import { theme } from "./constants";
import { styles } from "./styles";
import { Header } from "./components/index";
import { StartGame } from "./screens/index";
import { Game } from "./screens/index";
import { GameOver } from "./screens/index";

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState("start");

  const [loaded] = useFonts({
    "Sen-Regular": require("../assets/fonts/Sen-Regular.ttf"),
    "Sen-Bold": require("../assets/fonts/Sen-Bold.ttf"),
    "Sen-ExtraBold": require("../assets/fonts/Sen-ExtraBold.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  const choices = ["👊 ", "✋", "✌️"];

  const winningCombos = {
    "👊 ": "✌️",
    "✋": "👊 ",
    "✌️": "✋",
  };

  const headerTitle =
    gameState !== "start" ? "Rock, Paper, Scissors" : "Welcome";

  const randomComputerChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

  const onPlayerChoose = (choice) => {
    const computer = randomComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(computer);
    if (winningCombos[choice] === computer) {
      setGameState("win");
    } else if (choice === computer) {
      setGameState("draw");
    } else {
      setGameState("lose");
    }
  };

  const onStartGame = () => {
    setGameState("game");
  };

  const onRestartGame = () => {
    setGameState("start");
    setPlayerChoice(null);
    setComputerChoice(null);
  };

  const Content = () =>
    gameState === "start" ? (
      <StartGame onStartGame={onStartGame} />
    ) : gameState === "game" ? (
      <Game choices={choices} onPlayerChoose={onPlayerChoose} />
    ) : (
      <GameOver
        gameState={gameState}
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        onRestartGame={onRestartGame}
      />
    );
  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
};

export default App;
