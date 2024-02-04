import { StyleSheet } from "react-native";

export const getStyles = (colors) =>
  StyleSheet.create({
    buttonContainer: {
      width: 300,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      padding: 3,
    },
    button: {
      backgroundColor: colors.primary,
      borderRadius: 10,
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: colors.text,
      fontSize: 16,
    },
  });
