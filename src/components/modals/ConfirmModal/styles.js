import { StyleSheet } from 'react-native';

const getStyles = (colors) =>
  StyleSheet.create({
    text: {
      color: colors.text,
      fontSize: 20,
      textAlign: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    actionButton: {
      flex: 1,
    },
  });

export default getStyles;
