import { StyleSheet } from "react-native";

export const getStyles = (colors) =>
  StyleSheet.create({
    item: {
      borderBottomColor: colors.cardContrast,
      borderBottomWidth: 1,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      minHeight: 70,
    },
    text: {
      color: colors.cardContrast,
      fontSize: 20,
    },
    details: {
      color: colors.cardContrast,
      fontSize: 14,
    },
    checkbox: {
      marginRight: 5,
    },
    trashIcon: {
      position: "absolute",
      right: 0,
    },
  });
