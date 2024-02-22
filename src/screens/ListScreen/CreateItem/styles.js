import { StyleSheet } from "react-native";

const getStyles = (colors) =>
  StyleSheet.create({
    alert: {
      flex: 1,
      justifyContent: 'center',
    },
    body: {
      backgroundColor: colors.border,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    title: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    actionButton: {
      flex: 1,
    },
    textInput: {
      textAlignVertical: 'top',
      backgroundColor: colors.card,
      color: colors.cardContrast,
      fontSize: 20,
      padding: 5,
      margin: 5,
    },
    backdrop: {
      backgroundColor: '#000',
      opacity: 0.5,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });

export default getStyles;
