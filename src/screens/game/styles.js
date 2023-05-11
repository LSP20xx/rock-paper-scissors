import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Sen-Bold",
    marginBottom: 20,
  },
  choices: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  choiceButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: 10,
    borderRadius: 5,
  },
  choiceText: {
    color: theme.colors.white,
    fontWeight: "bold",
  },
});
