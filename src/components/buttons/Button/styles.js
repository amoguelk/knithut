import { StyleSheet } from "react-native";

export const getStyles = (colors) =>
  StyleSheet.create({
    button: {
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      paddingVertical: 15,
      margin: 5,
    },
    disabled: { backgroundColor: colors.cardMidContrast },
    enabled: { backgroundColor: colors.primary },
    buttonLabel: {
      color: colors.text,
      fontSize: 20,
    },
  });
