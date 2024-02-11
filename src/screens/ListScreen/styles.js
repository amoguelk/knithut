import { StyleSheet } from "react-native";

const getStyles = (colors) =>
  StyleSheet.create({
    listContainer: {
      borderRadius: 10,
      flex: 1,
      backgroundColor: colors.border,
      padding: 20,
    },
  });

export default getStyles;
