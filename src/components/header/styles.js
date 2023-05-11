import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: theme.colors.black,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: theme.colors.white,
    fontFamily: "Sen-Bold",
  },
});