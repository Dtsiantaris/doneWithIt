import { Platform } from "react-native";
import { StyleSheet } from "react-native";

import colors from "../config/colors";

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  button: {
    borderRadius: 30,
    color: colors.primary,
  },
});

export default styles;
