import { StyleSheet } from 'react-native';

const getStyles = (colors) =>
  StyleSheet.create({
    text: {
      color: colors.text,
      fontSize: 20,
    },
    title: {
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
  });

export default getStyles;
