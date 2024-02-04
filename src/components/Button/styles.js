import { StyleSheet } from "react-native";

export const getStyles = (colors) =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 90,
      paddingVertical: 15,
      margin: 5,
    },
    buttonLabel: {
      color: colors.text,
      fontSize: 20,
    },
  });
