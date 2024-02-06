import { StyleSheet } from "react-native";

export const getStyles = (colors) =>
  StyleSheet.create({
    container: {
      borderRadius: 10,
      flex: 1,
      backgroundColor: colors.card,
      padding: 20,
    },
  });
