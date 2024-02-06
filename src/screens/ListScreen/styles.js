import { StyleSheet } from "react-native";

export const getStyles = (colors) =>
  StyleSheet.create({
    listContainer: {
      borderRadius: 10,
      flex: 1,
      backgroundColor: colors.border,
      padding: 20,
    },
  });
